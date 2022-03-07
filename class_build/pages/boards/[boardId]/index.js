import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardsDetailPage({ myboardData }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:site_name" content={myboardData.title} />
        <meta property="description" content={myboardData.contents} />
        <meta property="og:image" content={myboardData.images[0]} />
      </Head>
      <div>
        안녕하세요! 게시글 상세 페이지입니다.awdawd 게시글 ID는{" "}
        {router.query.boardId}
        입니다.
      </div>
    </div>
  );
}
// console.log(myboardData);

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
    }
  }
`;

export async function getServerSideProps(context) {
  console.log(context);
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {
      boardId: context.query.boardId,
    }
  );

  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
}
