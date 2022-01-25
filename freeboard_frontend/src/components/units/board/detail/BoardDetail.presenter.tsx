import * as S from "./BoardDetail.styles";
import React from "react";
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
}: IPresenterBoardProps) {
  return (
    <S.Fragment>
      <S.Wrapper>
        <S.Content>
          <S.Content_Header>
            <S.Profile>
              <RedditCircleFilled style={{ fontSize: "65px", color: "gray" }} />
              <S.Sub_Profile>
                <span>{data?.fetchBoard?.writer}</span>
                <p>{getMyDate(data?.fetchBoard?.createdAt)}</p>
              </S.Sub_Profile>
            </S.Profile>
            <S.Logo>
              <PushpinFilled
                style={{
                  color: "#FFD600",
                  fontSize: "35px",
                  marginRight: "5px",
                }}
              />
              <EnvironmentFilled
                style={{ color: "#FFD600", fontSize: "35px" }}
              />
            </S.Logo>
          </S.Content_Header>
          <S.Content_Body>
            <S.Body_Title>
              {data?.fetchBoard?.title}
              <br />
            </S.Body_Title>
            <S.Body_Picture>
              <img
                src="http://imgc.1300k.com/aaaaaib/goodsdesc/215025/01/215025014746_D5.jpg"
                style={{ width: "700px", height: "550px" }}
              />
            </S.Body_Picture>
            <S.Body_Text>
              {data?.fetchBoard?.contents}
              <br />
            </S.Body_Text>
            <S.Body_Youtube>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aznRuPJhx5I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </S.Body_Youtube>
          </S.Content_Body>
          <S.Content_Footer>
            <S.Like_Btn>
              <LikeFilled style={{ color: "#FFD600", fontSize: "30px" }} />
              1920
            </S.Like_Btn>
            <S.Dislike_Btn>
              <LikeFilled style={{ fontSize: "30px" }} />
              1920
            </S.Dislike_Btn>
          </S.Content_Footer>
        </S.Content>
      </S.Wrapper>
      <S.Body>
        <S.List_Btn onClick={btnMoveToList}>목록으로</S.List_Btn>
        <S.Edit_Btn onClick={btnMoveToEdit}>수정하기</S.Edit_Btn>
        <S.Delete_Btn>삭제하기</S.Delete_Btn>
      </S.Body>
    </S.Fragment>
  );
}
