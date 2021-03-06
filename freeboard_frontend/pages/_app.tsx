import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { onError } from "@apollo/client/link/error";
// import styled from "@emotion/styled";
import { createUploadLink } from "apollo-upload-client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import { useRouter } from "next/router";

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const temp = accessToken;
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
    temp,
  };

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. refreshToken으로 accessToken 재발급 받기
          // Promise이기 때문에 then을 사용해 getAccessToken의 return 값을 받아올 수 있다.
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 5. 재발급 받은 accessToken으로 방금 실패한 query 재요청하기
            // console.log(operation.getContext());
            operation.setContext({
              headers: {
                ...operation.getContext().response.headers,
                Authorization: `Bearer ${newAccessToken}` || null,
              },
            }); // 설정 변경(accessToken 바꾸기)
            return forward(operation); // 변경된 operation 재요청하기
          });
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    // console.log("먼저 실행되어야 하는 거");
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });

    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") || "{}"));
    }
  }, [router, setAccessToken]);

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
