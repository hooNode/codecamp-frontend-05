import { useState } from "react";

export default function NewFile({ num, setNum }) {
  const clickBtn = () => {
    setNum(num + 1);
  };
  return (
    <>
      <></>
      <button onClick={clickBtn}> 후후</button>
    </>
  );
}
