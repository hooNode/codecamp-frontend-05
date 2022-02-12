import React, { useContext, useEffect } from "react";
import { ExampleContext } from "../../../../pages/21-04-context-api/index";

export default function BoardWriteUI({ isEdit }) {
  const data = useContext(ExampleContext);

  return (
    <>
      <div>{isEdit ? "수정" : "등록"}</div>
      <div>{data.isOpen ? "열림" : "닫힘"}</div>
    </>
  );
}
