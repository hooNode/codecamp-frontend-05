import { useEffect, useRef, useState } from "react";
import Router, { useHistory } from "next/router";
// import useHistory  from "react-router-dom";

export default function ClassCounterPage() {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const history = useHistory();

  const [count, setCount] = useState(20);

  useEffect(() => {
    console.log("마운트 됨");
    ref.current?.focus();
  }, [count]);

  useEffect(() => {
    console.log("마운트 됨");
    ref.current?.focus();
    return () => {
      console.log("여기서 나갈래용");
    };
  }, []);

  useEffect(() => {
    console.log("수정되고 다시그려짐");
  });

  const onClickCounter = () => {
    console.log("카운터를 클릭하셨습니다.");
    setCount(count + 1);
  };

  const onClickMove = () => {
    // router.push("/");
    // window.location.href = "/";
  };

  return (
    <>
      <div>
        <input ref={ref} type="text" />
        <div>현재카운트: {count}</div>
        <button onClick={onClickCounter}>카운트 올리기</button>
        {/* <button onClick={onClickMove}>나가기</button> */}
        <button onClick={onClickMove}>나가기</button>
      </div>
    </>
  );
}
function useHistory() {
  throw new Error("Function not implemented.");
}
