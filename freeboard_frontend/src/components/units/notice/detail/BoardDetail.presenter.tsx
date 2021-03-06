import * as S from "./BoardDetail.styles";
import React from "react";
import ReactPlayer from "react-player";

import {
  RedditCircleFilled,
  EnvironmentFilled,
  LikeFilled,
  PushpinFilled,
} from "@ant-design/icons";
import { getMyDate } from "../../../../commons/libraries/utils";
import { IPresenterBoardProps } from "./BoardDetail.types";

export default function DynamicRoutePage({
  data,
  btnMoveToList,
  btnMoveToEdit,
  onClickDeleteBtn,
  onClickLikeBtn,
  onClickDislikeBtn,
}: IPresenterBoardProps) {
  return (
    <S.Fragment>
      <S.Wrapper>
        <S.Content>
          <S.Content_Header>
            <S.Profile>
              <S.Sub_Profile>
                <p>{getMyDate(data?.fetchBoard?.createdAt)}</p>
              </S.Sub_Profile>
            </S.Profile>
            <S.Logo>
              <PushpinFilled
                style={{
                  color: "#df3416",
                  fontSize: "35px",
                  marginRight: "5px",
                }}
              />
              <EnvironmentFilled
                style={{ color: "#df3416", fontSize: "35px" }}
              />
            </S.Logo>
          </S.Content_Header>
          <S.Body_Youtube>
            <ReactPlayer
              url={data?.fetchBoard?.youtubeUrl}
              width="1000px"
              height="550px"
            />
          </S.Body_Youtube>
          <S.Content_Body>
            <>
              {data?.fetchBoard?.images.map((el) => (
                <>
                  <img
                    src={`https:/storage.googleapis.com/${el}`}
                    width="78px"
                    height="78px"
                  />
                </>
              ))}
            </>
            <S.Content_Footer>
              <S.Body>
                <S.ListBtn onClick={btnMoveToList}>목록</S.ListBtn>
                <S.Edit_Btn onClick={btnMoveToEdit}>수정</S.Edit_Btn>
                <S.Delete_Btn onClick={onClickDeleteBtn}>삭제</S.Delete_Btn>
              </S.Body>
              <S.BtnBox>
                <S.Like_Btn>
                  <LikeFilled
                    onClick={onClickLikeBtn}
                    style={{ color: "#df3416", fontSize: "30px" }}
                  />
                  {data?.fetchBoard?.likeCount}
                </S.Like_Btn>
                <S.Dislike_Btn>
                  <LikeFilled
                    onClick={onClickDislikeBtn}
                    style={{ fontSize: "30px" }}
                  />
                  {data?.fetchBoard?.dislikeCount}
                </S.Dislike_Btn>
              </S.BtnBox>
            </S.Content_Footer>
            <S.Body_Text>
              <RedditCircleFilled style={{ fontSize: "65px", color: "gray" }} />
              <S.ToFixBox>
                <S.WriterText>{data?.fetchBoard?.writer}</S.WriterText>

                <S.ContentsText>{data?.fetchBoard?.contents}</S.ContentsText>
              </S.ToFixBox>
              <br />
            </S.Body_Text>
          </S.Content_Body>
        </S.Content>
      </S.Wrapper>
    </S.Fragment>
  );
}
