import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import PBoardDetail from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function DynamicRoutePage() {
  const router = useRouter();

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
  return (
    <PBoardDetail
      data={data}
      btnMoveToList={btnMoveToList}
      btnMoveToEdit={btnMoveToEdit}
    />
  );
}
