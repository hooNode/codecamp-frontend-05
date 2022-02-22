import React from "react";

export default function taskQueuePage() {
  const onClickTimer = () => {
    console.log("시작");
    setTimeout(() => {
      console.log("중");
    }, 1000);

    console.log("끝");
  };
  return (
    <>
      <button onClick={onClickTimer}>시작</button>
    </>
  );
}
