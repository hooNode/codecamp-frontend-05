import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function BoardsDetailPage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:site_name" content="hoonode Page" />
        <meta
          property="description"
          content="저의 게시판에 오신 것을 환영합니다."
        />
        <meta property="og:image" content="이미지일걸..?" />
      </Head>
      <div>
        안녕하세요! 게시글 상세 페이지입니다.awdawd 게시글 ID는{" "}
        {router.query.boardId}
        입니다.
      </div>
    </div>
  );
}
