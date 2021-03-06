import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import PBoardDetail from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function DynamicRoutePage() {
  const router = useRouter();
  const [deleteBoardF] = useMutation(DELETE_BOARD);
  const [likeCount, refetch] = useMutation(LIKE_BOARD);
  const [dislikeCount] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.aaa),
      },
    }
  );

  const btnMoveToEdit = () => {
    router.push(`/notice/${router.query.aaa}/edit`);
  };
  const btnMoveToList = () => {
    router.push(`/notice/list`);
  };
  const onClickLikeBtn = async () => {
    await likeCount({
      variables: {
        boardId: String(router.query.aaa),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.aaa) },
        },
      ],
    });
  };
  const onClickDislikeBtn = async () => {
    await dislikeCount({
      variables: {
        boardId: String(router.query.aaa),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.aaa) },
        },
      ],
    });
  };

  const onClickDeleteBtn = async () => {
    try {
      await deleteBoardF({
        variables: {
          boardId: String(router.query.aaa),
        },
      });
      router.push(`/notice/list`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PBoardDetail
      data={data}
      btnMoveToList={btnMoveToList}
      btnMoveToEdit={btnMoveToEdit}
      onClickDeleteBtn={onClickDeleteBtn}
      onClickLikeBtn={onClickLikeBtn}
      onClickDislikeBtn={onClickDislikeBtn}
    />
  );
}
