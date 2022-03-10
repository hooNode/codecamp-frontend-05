import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import * as S from "./CommentList.styles";
import { Modal } from "antd";

import { useRouter } from "next/router";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTIONS,
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  DELETE_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./CommentList.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";

import CommentListAnswer from "./CommentList.Answer";
import GetDateaaa from "../../../../commons/GetDateaaa";

export default function CommentListItems({ el }) {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [contentsText, setContentsText] = useState("");
  const [answerContents, setAnswerContents] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data: loginUser } = useQuery(FETCH_USER_LOGGED_IN);

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

  const [deleteBoardQuestion] = useMutation(DELETE_USEDITEM_QUESTION_ANSWERS);
  const deleteAnswer = (id) => async (e) => {
    try {
      await deleteBoardQuestion({
        variables: {
          useditemQuestionAnswerId: id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: el._id, page: 1 },
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
            variables: { useditemId: String(router.query.board), page },
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
    console.log(el._id);
  };

  const [answerPage, setAnswerPage] = useState(1);

  const { data: answerData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: el._id,
      page: 1,
    },
  });

  const onPushAnswer = async () => {
    const result = await createAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: answerContents,
        },
        useditemQuestionId: el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTION_ANSWERS,
          variables: {
            useditemQuestionId: String(el._id),
            page: answerPage,
          },
        },
      ],
    });
    setAnswerContents("");
    setIsAnswer((prev) => !prev);
  };

  const [answerList, setAnswerList] = useState(false);

  const onClickMoreAnswer = () => {
    setAnswerList((prev) => !prev);
  };

  useEffect(() => {}, []);

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
            <S.CreatedDay>
              <GetDateaaa data={el.createdAt} />
            </S.CreatedDay>
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
            <S.CreatedDay>
              <GetDateaaa data={el.createdAt} />
            </S.CreatedDay>
            {loginUser?.fetchUserLoggedIn.name === el.user.name ? (
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
            ) : (
              <></>
            )}
          </S.FirstLine>
          <S.ThirdLine>
            <S.ContentsText>{el.contents.createdAt}</S.ContentsText>
          </S.ThirdLine>
          <S.AnswerBtn onClick={onClickAnswer}>답글</S.AnswerBtn>
          {isAnswer ? (
            <S.AnswerWrapper>
              <S.AnswerInput onChange={answerContetns} />
              <S.AnswerRightSide>
                <S.QuestionAnswerBtn onClick={onPushAnswer}>
                  답글 달기
                </S.QuestionAnswerBtn>
              </S.AnswerRightSide>
            </S.AnswerWrapper>
          ) : (
            <></>
          )}

          {answerList && (
            <>
              {answerData?.fetchUseditemQuestionAnswers.map((answer, index) => (
                <S.QuestionAnswerWrapper key={index}>
                  <S.AnswerTextArea>
                    <S.CreatedDay>
                      <GetDateaaa data={answer.createdAt} />
                    </S.CreatedDay>

                    <S.ContentsSubText>{answer.user.name}</S.ContentsSubText>
                    <S.ContentsSubText>{answer.contents}</S.ContentsSubText>
                  </S.AnswerTextArea>
                  {loginUser?.fetchUserLoggedIn.name === answer.user.name ? (
                    <S.AnswerImageIcon>
                      <S.EditBtn onClick={isEditBtn}>
                        <img
                          src="/edit.png"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </S.EditBtn>
                      <S.DeleteBtn onClick={deleteAnswer(answer._id)}>
                        <img
                          src="/close.png"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </S.DeleteBtn>
                    </S.AnswerImageIcon>
                  ) : (
                    <></>
                  )}
                </S.QuestionAnswerWrapper>
              ))}
            </>
          )}
          <S.MoreAnswer onClick={onClickMoreAnswer}>
            {answerList ? (
              <>닫기</>
            ) : (
              <>더보기 ({answerData?.fetchUseditemQuestionAnswers.length})</>
            )}
          </S.MoreAnswer>
        </S.CommentListContainer>
      )}
    </S.Fragment>
  );
}
