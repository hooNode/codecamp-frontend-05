import React from "react";
import DetailContainerPage from "../../../src/components/units/market/detail/index";
import styled from "@emotion/styled";
import CommentWrite from "../../../src/components/units/market/comment/writer/CommentWrite.container";

const TotalDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function DetailPage() {
  return (
    <TotalDetail>
      <DetailContainerPage />
      <CommentWrite />
    </TotalDetail>
  );
}
