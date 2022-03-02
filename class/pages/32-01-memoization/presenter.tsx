import React from "react";

function MemoizationPresenterPage({ countState }) {
  console.log("프리젠터가 렌더링 됩니다!!");
  return (
    <div>
      <h1>============================</h1>
      <h1>여기는 프리젠터입니당.</h1>
      <h1>============================</h1>
    </div>
  );
}

export default React.memo(MemoizationPresenterPage);
