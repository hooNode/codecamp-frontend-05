import React from "react";

export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("Promise 시작!!");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
      }, 4000);
    });

    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("영희");
      }, 5000);
    });

    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("훈이");
      }, 3000);
    });
    console.log(result3);
    console.timeEnd("Promise 시작!!");
  };

  const onClickPromiseAll = async () => {
    // 하나하나 각각 실행하는 방법
    // console.time("Promise 시작");
    // const results = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("철수");
    //     }, 1000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("영희");
    //     }, 2000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("훈이");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(results);
    // console.timeEnd("Promise 시작");

    // map을 사용해서 간소화하기
    console.time("Promise 시작");
    const classmates = ["철수", "영희", "훈이"];
    const results = await Promise.all(
      classmates.map(
        (el, index) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 1000 * (index + 1));
          })
      )
    );

    console.log(results);
    console.timeEnd("Promise 시작");
  };

  return (
    <>
      <button onClick={onClickPromise}>개별 시작하기</button>
      <br />
      <br />
      <button onClick={onClickPromiseAll}>All 시작하기</button>
    </>
  );
}
