import React, { useState } from "react";
import { useEffect, MouseEvent } from "react";
import * as S from "./BoardList.styles";
import { IBoardList } from "./BoardList.types";
import BoardListPresenterItems from "./BoardList.presenter.Items";
import ReactPlayer from "react-player";
import { RedditCircleFilled } from "@ant-design/icons";
import GetDate from "./GetDate";
import ClipLoader from "react-spinners/ClipLoader";

export default function BoardList({
  createClick,
  pushClick,
  newData,
  setNewData,
  prevData,
}: IBoardList) {
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newPage, setNewPage] = useState(20);
  useEffect(() => {
    if (prevData.length > 21 && prevData.length < 25) {
      setNewData(prevData.slice(0, 10));
    }
  }, [prevData]);

  useEffect(() => {
    if (isInView && prevData.length > 21) {
      if (prevData.length > newData.length) {
        setIsLoading(true);
        setTimeout(() => {
          setNewData((prev) => [
            ...prev,
            ...prevData.slice(newData.length, newPage),
          ]);
          setNewPage((prev) => prev + 10);
          setIsLoading(false);
        }, 1100);
      }
    }
  }, [isInView]);

  return (
    <S.Wrapper>
      <S.BoardTable>
        {newData?.map((el: any, index: number) => {
          return (
            <BoardListPresenterItems
              el={el}
              index={index}
              key={el.key}
              pushClick={pushClick}
              setIsInView={setIsInView}
              newData={newData}
              prevData={prevData}
            />
          );
        })}
        {isLoading && (
          <S.LoadingBox>
            <ClipLoader loading={isLoading} size={150} color="#6b5ce7" />
          </S.LoadingBox>
        )}
        <S.CreateBtn>
          <button onClick={createClick}>게시글 쓰기</button>
        </S.CreateBtn>
      </S.BoardTable>
    </S.Wrapper>
  );
}
