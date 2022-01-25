import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/board/comment/wrtie/CommentWrite.container";
import styled from "@emotion/styled";

const TotalDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DynamicRoutePage() {
  return (
    <TotalDetail>
      <BoardDetail />
      <CommentWrite />
    </TotalDetail>
  );
}
