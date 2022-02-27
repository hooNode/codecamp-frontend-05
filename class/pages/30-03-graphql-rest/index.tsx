import axios from "axios";
import React from "react";

export default function GraphQLRestPage() {
  const onClickGraphQL = () => {
    axios.post("http://backend05.codebootcamp.co.kr/graphql", {
      query: `mutation createBoard(createBoardInput: {
          
        }) {
          
        }`,
    });
  };
  return <button onClick={onClickGraphQL}>GraphQL Axios 테스트</button>;
}
