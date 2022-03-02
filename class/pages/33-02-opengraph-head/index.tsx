// 우리 페이지

import Head from "next/head";

export default function OpenGraphHeadPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="내사이트" />
        <meta property="og:description" content="-내 사이트에 대한 설명-" />
      </Head>
      <div>Opengraph 연습 페이지입니다.</div>
    </div>
  );
}
