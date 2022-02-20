import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const getBoard = (el) => (e) => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const { __typename, ...element } = el;
    console.log(baskets);
    console.log(element);

    console.log(baskets.includes(element)); // 객체라서 안된다. filter 로 _id 값을 비교해서 하자
    if (!baskets.includes(element)) baskets.push(element);
    localStorage.setItem("basket", JSON.stringify(baskets));
  };
  const onMoveToBasket = () => {
    router.push("/26-07-basket-logged-in");
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>작성자:{el.writer}</span>
          <span>제목:{el.title}</span>
          <button id={el._id} onClick={getBoard(el)}>
            장바구니 담기
          </button>
        </div>
      ))}
      <button onClick={onMoveToBasket}>장바구니보러가기</button>
    </div>
  );
}
