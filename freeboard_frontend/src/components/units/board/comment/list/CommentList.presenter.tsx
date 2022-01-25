import * as S from "./CommentList.styles";
import React from "react";

export default function DynamicRoutePage({
  data,
  btnMoveToList,
  btnMoveToEdit,
  btnClick,
}) {
  return (
    <S.Fragment>
      <S.Footer>
        <S.Footer_Title>
          <img src="/review.png" alt="error" width="20" height="20px" />
          댓글
        </S.Footer_Title>
        <S.Footer_Tag>
          <S.Tag_Writer placeholder="작성자" />
          <S.Tag_Password placeholder="비밀번호" />
          <S.Tag_Review>✩ ✩ ✩ ✩ ✩</S.Tag_Review>
        </S.Footer_Tag>
        <S.Footer_Text>
          <S.Text placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.Text>
          <S.PossibleArea>
            <S.TextCount>0 / 100</S.TextCount>
            <S.Text_Btn>등록하기</S.Text_Btn>
          </S.PossibleArea>
        </S.Footer_Text>
        <S.Footer_List></S.Footer_List>
      </S.Footer>
    </S.Fragment>
  );
}
