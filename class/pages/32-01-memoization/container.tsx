import React, { useCallback, useMemo } from "react";
import MemoizationPresenterPage from "./presenter";

function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다.");

  let countLet = 0;
  const [countState, setCountState] = React.useState(0);

  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // useCallback 함수
  // const onClickCountState = useCallback(() => {
  //   setCountState((prev) => prev + 1);
  // }, []);

  // useMemo로 useCallback 만들어 보기
  // const onClickCountState = useMemo(() => {
  //   return () => {
  //     setCountState((prev) => prev + 1);
  //   };
  // }, []);

  // 다시 원래 함수
  const onClickCountState = () => {
    setCountState((prev) => prev + 1);
  };

  return (
    <div>
      <h1>이것은 컨테이너 입니다.</h1>
      {countLet}
      <button onClick={onClickCountLet}>카운트 (countLet) +1 올리기!</button>
      {countState}
      <button onClick={onClickCountState}>
        카운트 (countState) +1 올리기!
      </button>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}

export default React.memo(MemoizationContainerPage);
