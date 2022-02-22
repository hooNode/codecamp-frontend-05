import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 인터페이스 선언 병합
// interface AAA {
//     name: string
//     age: number
// }
// interface AAA {
//     school: string
// }

// 유니온 타입
type IPage = "/board" | "/market" | "/mypage";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");
  const [prevPage, setPrevPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  useEffect(() => {
    setPrevPage(router.asPath);
  }, []);

  return {
    moveToPage,
    visitedPage,
    prevPage,
  };
}
