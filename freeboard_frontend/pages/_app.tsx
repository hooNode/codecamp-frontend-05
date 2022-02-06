import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Global, css } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import styled from "@emotion/styled";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
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
