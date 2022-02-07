import { useState } from "react";
import { useMutation } from "@apollo/client";
import * as S from "./CommentList.styles";
import { Modal } from "antd";
import StarPage from "../star";

import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentList.queries";

export default function CommentListItems({ el }) {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [rating, setRating] = useState(0);
  const [starNum, setStarNum] = useState(0);
  const [contentsText, setContentsText] = useState("");
  const isComment = true;

  const deleteConfirm = (el) => {
    setDeleteModal(true);
    setCommentId(el._id);
  };
  const onChangeDeletePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickDelete = () => {
    setDeleteModal(false);
  };

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.aaa },
          },
        ],
      });
      setDeleteModal(false);
    } catch (e) {
      alert(e.message);
    }
  };

  const isEditBtn = () => {
    setIsEdit(true);
  };

  const doneEditBtn = () => {
    setIsEdit(false);
  };

  const editContents = (e) => {
    setContentsText(e.target.value);
  };

  const editPassword = (e) => {
    setPassword(e.target.value);
  };
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onClickUpdateComment = async () => {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: el._id,
          password,
          updateBoardCommentInput: {
            contents: contentsText,
            rating: rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.aaa) },
          },
        ],
      });
    } catch (error) {
      console.dir(error);
    }
    setIsEdit(false);
  };

  return (
    <S.Fragment>
      {deleteModal && (
        <Modal
          visible={true}
          onCancel={onClickDelete}
          onOk={onClickDeleteComment}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {isEdit && (
        <S.CommentListContainer>
          <S.FirstLine>
            <S.CreatedDay>{el.createdAt.slice(0, 10)}</S.CreatedDay>
            <div>
              <S.ConfirmBtn onClick={onClickUpdateComment}>수정</S.ConfirmBtn>
              <S.DeleteBtn onClick={doneEditBtn}>
                <img
                  src="/close.png"
                  style={{ width: "20px", height: "20px" }}
                />
              </S.DeleteBtn>
            </div>
          </S.FirstLine>
          <S.SecondLine>
            <S.WriterName>{el.writer}</S.WriterName>
            <S.StarBox>
              <StarPage
                setRating={setRating}
                starNum={starNum}
                setStarNum={setStarNum}
              />
            </S.StarBox>
          </S.SecondLine>
          <S.EditThirdLine>
            <S.EditTextBox onChange={editContents} />
            <p>비밀번호 : </p>
            <S.EditPassword type="password" onChange={editPassword} />
          </S.EditThirdLine>
        </S.CommentListContainer>
      )}
      {!isEdit && (
        <S.CommentListContainer>
          <S.FirstLine>
            <S.CreatedDay>{el.createdAt.slice(0, 10)}</S.CreatedDay>
            <S.ImageIcon>
              <S.EditBtn onClick={isEditBtn}>
                <img
                  src="/edit.png"
                  style={{ width: "20px", height: "20px" }}
                />
              </S.EditBtn>
              <S.DeleteBtn onClick={() => deleteConfirm(el)}>
                <img
                  src="/close.png"
                  style={{ width: "20px", height: "20px" }}
                />
              </S.DeleteBtn>
            </S.ImageIcon>
          </S.FirstLine>
          <S.SecondLine>
            <S.WriterName>{el.writer}</S.WriterName>
            <S.StarBox>
              <StarPage commentRating={el.rating} isComment={isComment} />
            </S.StarBox>
          </S.SecondLine>
          <S.ThirdLine>
            <S.ContentsText>{el.contents}</S.ContentsText>
          </S.ThirdLine>
        </S.CommentListContainer>
      )}
    </S.Fragment>
  );
}
