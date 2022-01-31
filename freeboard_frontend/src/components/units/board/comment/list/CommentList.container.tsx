import { Modal } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import UICommentList from "./CommentList.presenter";
import StarPage from "../star";
import * as S from "./CommentList.styles";
import { useRouter } from "next/router";
// import { CREATE_BOARD_COMMENTS } from "./CommentWrite.queries";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export default function CommentListContainer() {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState("");
  const isComment = true;
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.aaa,
    },
  });

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

  return (
    <>
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
      {data?.fetchBoardComments.map((el) => (
        <S.CommentListContainer key={el._id}>
          <S.FirstLine>
            <S.CreatedDay>{el.createdAt.slice(0, 10)}</S.CreatedDay>
            <S.ImageIcon>
              <S.EditBtn>
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
      ))}
    </>
  );
}
