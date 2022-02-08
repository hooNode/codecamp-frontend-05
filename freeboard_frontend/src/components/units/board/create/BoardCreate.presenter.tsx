import * as S from "./BoardCreate.styles";
import React from "react";
import { IPresenterBoardProps } from "./BoardCreate.types";

export default function presenterBoard({
  msg1,
  msg2,
  msg3,
  msg4,
  word1,
  word2,
  word3,
  word4,
  onBtn,
  checkWording1,
  checkWording2,
  checkWording3,
  checkWording4,
  btnClick,
  allData,
  modaltime,
  isEdit,
  btnEdit,
  data,
  getUTubeUrl,
  image,
  onChangeFile,
  fileRef,
  onClickImage,
}: IPresenterBoardProps) {
  return (
    <S.Fragment>
      <S.Form>
        <S.Title>
          <span>게시물 {isEdit ? "수정" : "등록"}</span>
        </S.Title>
        <S.User>
          <S.Id>
            <span>작성자</span>
            <S.ID_Input
              type="text"
              disabled={isEdit}
              placeholder="이름을 입력해주세요."
              onChange={checkWording1}
              defaultValue={isEdit ? data?.fetchBoard.writer : ""}
            />
            {msg1 ? (
              <S.ConfirmMsg>작성자를 다시 확인해 주세요.</S.ConfirmMsg>
            ) : (
              <div></div>
            )}
          </S.Id>
          <S.Password>
            <span>비밀번호</span>
            <S.Password_Input
              type="password"
              placeholder="비밀번호을 입력해주세요."
              onChange={checkWording2}
            />
            {msg2 ? (
              <S.ConfirmMsg>비밀번호를 다시 확인해 주세요.</S.ConfirmMsg>
            ) : (
              <div></div>
            )}
          </S.Password>
        </S.User>
        <S.Content>
          <S.Content_Title>
            <span>제목</span>
            <S.Title_Input
              type="text"
              placeholder="제목을 입력해주세요."
              onChange={checkWording3}
              defaultValue={isEdit ? data?.fetchBoard.title : ""}
            />
            {msg3 ? (
              <S.ConfirmMsg>제목을 다시 확인해 주세요.</S.ConfirmMsg>
            ) : (
              <div></div>
            )}
          </S.Content_Title>
          <S.Content_Story>
            <span>내용</span>
            <S.Story_Input
              placeholder="내용을 입력해주세요."
              onChange={checkWording4}
              defaultValue={isEdit ? data?.fetchBoard.contents : ""}
            />
            {msg4 ? (
              <S.ConfirmMsg>내용을 다시 확인해 주세요.</S.ConfirmMsg>
            ) : (
              <div></div>
            )}
          </S.Content_Story>
          <S.Content_Youtube>
            <span>유튜브</span>
            <S.Youtue_Input
              type="text"
              placeholder="링크를 복사해주세요."
              onChange={getUTubeUrl}
              defaultValue={isEdit ? data?.fetchBoard.youtubeUrl : ""}
            />
          </S.Content_Youtube>
          <S.Content_Picture>
            <span>사진첨부</span>
            <S.Picture_Div>
              {image.map((el, index) => (
                <>
                  {el !== "1" ? (
                    <img
                      src={`https:/storage.googleapis.com/${el}`}
                      width="78px"
                      height="78px"
                    />
                  ) : (
                    <S.Picture_img onClick={onClickImage} key={index}>
                      <div>+</div>
                      <span>Upload</span>
                    </S.Picture_img>
                  )}
                  <input
                    style={{ display: "none" }}
                    type="file"
                    ref={fileRef}
                    onChange={onChangeFile}
                  />
                </>
              ))}
            </S.Picture_Div>
          </S.Content_Picture>
          <S.Content_Radio>
            <S.Radio_Title>
              <span>메인 설정</span>
            </S.Radio_Title>
            <S.Input_Radio>
              <S.Radio_Btn1>
                <input type="radio" name="radio"></input>
                <span>유튜브</span>
              </S.Radio_Btn1>
              <S.Radio_Btn2>
                <input type="radio" name="radio"></input>
                <span>사진</span>
              </S.Radio_Btn2>
            </S.Input_Radio>
          </S.Content_Radio>
          <S.Btn
            type="submit"
            onClick={isEdit ? btnEdit : btnClick}
            onBtn={onBtn}
          >
            {isEdit ? "수정하기" : "등록하기"}
          </S.Btn>
        </S.Content>
        {modaltime ? <S.Modal>{allData}</S.Modal> : <div></div>}
      </S.Form>
    </S.Fragment>
  );
}
