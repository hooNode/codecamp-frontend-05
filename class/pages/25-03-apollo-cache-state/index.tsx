import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              console.log(readField);
              return prev.filter((el) => readField("_id", el) !== boardId);
            },
          },
        });
      },
    });
  };
  const onClickCreate = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영화",
          title: "asdasd",
          password: "dwde",
          contents: "gdgdgdgdgdgdgd",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  // useEffect(() => {
  //   console.log(data?.fetchBoards[0]);
  // }, []);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>작성자:{el._id}</span>
          <br />
          <span>작성자:{el.writer}</span>
          <br />
          <span>제목:{el.title}</span>
          <br />
          <span>내용:{el.contents}</span>
          <br />
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
          <br />
          <br />
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </div>
  );
}
