import { useRouter } from "next/router";
import React, { useState } from "react";

type IPage = "/board" | "/market" | "/mypage";

export default function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  return { moveToPage, visitedPage };
}
