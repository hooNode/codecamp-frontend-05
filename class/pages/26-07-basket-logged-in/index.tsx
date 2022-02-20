import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function BasketLoggedInPage() {
  const [basketsItems, setBasketItems] = useState([]);
  const router = useRouter();
  const onMoveToBasket = () => {
    router.push("/26-06-basket");
  };
  useEffect(() => {
    setBasketItems(JSON.parse(localStorage.getItem("basket") || "[]"));
  }, []);

  return (
    <div>
      <h1>나만의 장바구니(비회원전용)</h1>
      {basketsItems.map((el) => (
        <div key={el._id}>
          <span>작성자:{el.writer}</span>
          <span>제목:{el.title}</span>
        </div>
      ))}
      <button onClick={onMoveToBasket}>바구니 담으러 가기</button>
    </div>
  );
}
