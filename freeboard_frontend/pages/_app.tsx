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
// import styled from "@emotion/styled";
import { createUploadLink } from "apollo-upload-client";

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
