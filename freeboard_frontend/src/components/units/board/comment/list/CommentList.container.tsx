import { ChangeEvent, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import UICommentList from "./CommentList.presenter";
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

export default function CommentListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.aaa,
    },
  });

  return (
    <>
      {data?.fetchBoardComments.map((el) => (
        <div key={el._id}>
          <div>{el.rating}</div>
          <div>{el.writer}</div>
          <div>{el.contents}</div>
          <div>{el.createdAt}</div>
        </div>
      ))}
    </>
  );
}
