import React from "react";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWriteContext({ isEdit }) {
  return <BoardWriteUI isEdit={isEdit} />;
}
