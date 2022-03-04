import { useState } from "react";
import { useMutation } from "@apollo/client";
import * as S from "./CommentList.styles";
import { Modal } from "antd";

import { useRouter } from "next/router";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTIONS,
} from "./CommentList.queries";

export default function CommentListItems({ el }) {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [contentsText, setContentsText] = useState("");

  const deleteConfirm = (el) => {
    setDeleteModal(true);
    setCommentId(el._id);
  };

  const onClickDelete = () => {
    setDeleteModal(false);
  };

  const [deleteBoardComment] = useMutation(DELETE_USEDITEM_QUESTIONS);

  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          useditemQuestionId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.board) },
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

  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTIONS);

  const onClickUpdateComment = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: el._id,
          updateUseditemQuestionInput: {
            contents: contentsText,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.board) },
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
        ></Modal>
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
          </S.SecondLine>
          <S.EditThirdLine>
            <S.EditTextBox onChange={editContents} />
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
          </S.SecondLine>
          <S.ThirdLine>
            <S.ContentsText>{el.contents}</S.ContentsText>
          </S.ThirdLine>
        </S.CommentListContainer>
      )}
    </S.Fragment>
  );
}
