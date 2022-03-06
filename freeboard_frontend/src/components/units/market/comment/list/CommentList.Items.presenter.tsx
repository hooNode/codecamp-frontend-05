import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import * as S from "./CommentList.styles";
import { Modal } from "antd";

import { useRouter } from "next/router";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTIONS,
  CREATE_USEDITEM_QUESTION_ANSWER,
} from "./CommentList.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";

export default function CommentListItems({ el }) {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [contentsText, setContentsText] = useState("");
  const [answerContents, setAnswerContents] = useState("");

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

  const [createAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);

  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  const answerContetns = (e) => {
    setAnswerContents(e.target.value);
  };

  const onPushAnswer = async () => {
    await createAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: answerContents,
        },
        useditemQuestionId: el._id,
      },
    });
  };

  return (
    <S.Fragment>
      {deleteModal && (
        <Modal
          visible={true}
          onCancel={onClickDelete}
          onOk={onClickDeleteComment}
        >
          <div>댓글을 삭제하시겠습니까?</div>
        </Modal>
      )}
      {isEdit && (
        <S.CommentListContainer>
          <S.FirstLine>
            <S.CreatedDay>{el.createdAt.slice(0, 10)}</S.CreatedDay>
            <S.IsEditBtn>
              <S.ConfirmBtn onClick={onClickUpdateComment}>수정</S.ConfirmBtn>
              <S.DeleteBtn onClick={doneEditBtn}>
                <img
                  src="/close.png"
                  style={{ width: "16px", height: "16px" }}
                />
              </S.DeleteBtn>
            </S.IsEditBtn>
          </S.FirstLine>
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
                  style={{ width: "16px", height: "16px" }}
                />
              </S.EditBtn>
              <S.DeleteBtn onClick={() => deleteConfirm(el)}>
                <img
                  src="/close.png"
                  style={{ width: "16px", height: "16px" }}
                />
              </S.DeleteBtn>
            </S.ImageIcon>
          </S.FirstLine>
          <S.ThirdLine>
            <S.ContentsText>{el.contents}</S.ContentsText>
          </S.ThirdLine>
          <S.AnswerBtn onClick={onClickAnswer}>답글</S.AnswerBtn>
          {isAnswer ? <S.AnswerInput onChange={answerContetns} /> : <></>}
        </S.CommentListContainer>
      )}
    </S.Fragment>
  );
}
