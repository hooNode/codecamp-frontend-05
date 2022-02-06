import React from "react";
import { useEffect, MouseEvent } from "react";
import * as S from "./BoardList.styles";
import { IBoardList } from "./BoardList.types";

export default function BoardList({
  data,
  createClick,
  pushClick,
  onClickDeleteAll,
  handleSingleCheck,
  handleAllCheck,
  checkItems,
  onClickDelete,
}: IBoardList) {
  const confirmCheck = (e: MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    return checkItems.includes(target.name)
      ? onClickDelete(e)
      : alert("체크하신 후 삭제해주세요.");
  };
  return (
    <S.Wrapper>
      <S.BoardTable>
        <S.Row>
          <S.ColumnCheck>
            <input
              type="checkbox"
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={checkItems.length === 10 ? true : false}
            />
          </S.ColumnCheck>
          <S.ColumnIndex>번호</S.ColumnIndex>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnWriter>작성자</S.ColumnWriter>
          <S.ColumnContent>내용</S.ColumnContent>
          <S.ColumnCreate>날짜</S.ColumnCreate>
          <S.ColumnBtn>삭제</S.ColumnBtn>
        </S.Row>
        {data?.fetchBoards.map((el: any, index: number) => (
          <S.Row key={el._id}>
            <S.ColumnCheck>
              <input
                type="checkbox"
                onChange={(e) => handleSingleCheck(e.target.checked, el._id)}
                checked={checkItems.includes(el._id) ? true : false}
              />
            </S.ColumnCheck>
            <S.ColumnIndex>{10 - index}</S.ColumnIndex>
            <S.ColumnTitle>
              {el.title.length >= 10 ? el.title.slice(0, 10) + "..." : el.title}
            </S.ColumnTitle>
            <S.ColumnWriter>
              {el.writer.length >= 10
                ? el.writer.slice(0, 10) + "..."
                : el.writer}
            </S.ColumnWriter>
            <S.ColumnContents onClick={() => pushClick(el._id)}>
              {el.contents.length >= 10
                ? el.contents.slice(0, 10) + "..."
                : el.contents}
            </S.ColumnContents>
            <S.ColumnCreate>{el.createdAt.slice(0, 10)}</S.ColumnCreate>
            <S.ColumnBtn>
              <button name={el._id} onClick={confirmCheck}>
                삭제
              </button>
            </S.ColumnBtn>
          </S.Row>
        ))}
        <S.AllBtn>
          <button onClick={() => onClickDeleteAll(checkItems)}>
            선택항목 삭제
          </button>
        </S.AllBtn>
        <S.CreateBtn>
          <button onClick={createClick}>게시글 쓰기</button>
        </S.CreateBtn>
      </S.BoardTable>
    </S.Wrapper>
  );
}
