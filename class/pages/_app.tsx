// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import { onError } from "@apollo/client/link/error";
import { GraphQLClient, gql } from "graphql-request";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import { useRouter } from "next/router";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8YzMsWT4NtiQotxA0bi-sAoXjOqCthTo",
  authDomain: "mysite9999-98ec3.firebaseapp.com",
  projectId: "mysite9999-98ec3",
  storageBucket: "mysite9999-98ec3.appspot.com",
  messagingSenderId: "579642434018",
  appId: "1:579642434018:web:83939be94a68565bc1d9bb",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}
export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const value = {
    accessToken,
    setAccessToken,
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
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}` || null,
              },
            }); // 설정 변경(accessToken 바꾸기)
            return forward(operation); // 변경된 operation 재요청하기
          });
        }
      }
    }
  });

  useEffect(() => {
    console.log("하이");
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, [router]);

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
