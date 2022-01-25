import { useState } from "react";

export default function StatePrevPage() {
  const [status, setStatus] = useState(false);
  const mooodal = () => {
    setStatus(true);
  };
  const closeMooodal = () => {
    setStatus(false);
  };

  return (
    <>
      <button onClick={mooodal}>모달버튼</button>
      {status ? (
        <div style={{ background: "red", width: "200px", height: "200px" }}>
          이건 모달입니다.
          <button onClick={closeMooodal}>모달 닫기 버튼</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
