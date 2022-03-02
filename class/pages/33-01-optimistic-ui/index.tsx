import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      likeCount
    }
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6217020a8cd4860029b4ca6b",
    },
  });

  const onClickOptimisticUI = async () => {
    await likeBoard({
      variables: {
        boardId: "6217020a8cd4860029b4ca6b",
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6217020a8cd4860029b4ca6b" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: {
          boardId: "6217020a8cd4860029b4ca6b",
          __typename: "Board",
          likeCount: data?.fetchBoard.likeCount + 1,
        },
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6217020a8cd4860029b4ca" },
          data: {
            fetchBoard: {
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재 카운트 {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
