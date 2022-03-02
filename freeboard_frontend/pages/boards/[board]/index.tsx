import React from "react";
import DetailContainerPage from "../../../src/components/units/notice/detail/index";
import styled from "@emotion/styled";
import CommentWrite from "../../../src/components/units/notice/comment/wrtie/CommentWrite.container";

const TotalDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function DetailPage() {
  return (
    <TotalDetail>
      <DetailContainerPage />
      <CommentWrite />
    </TotalDetail>
  );
}
