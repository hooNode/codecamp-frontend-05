import React, { MouseEvent, useEffect } from "react";
import { useRouter } from "next/router";
import PBoardList from "./BoardList.presenter";
import { FETCH_BOARDS, DELETE_BOARD, BOARD_COUNTS } from "./BoardList.queries";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [pageNum, setPageNum] = useState(1);
  const [newData, setNewData] = useState<Array<any>>([]);
  const [newPage, setNewPage] = useState(9);
  const [prevData, setPrevData] = useState<Array<any>>([]);

  const { data: boardCounts } = useQuery(BOARD_COUNTS);
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      page: pageNum,
    },
  });

  const youTubeData = () => {
    const youTubeList = data?.fetchBoards.filter(
      (el) =>
        el.youtubeUrl !== null &&
        el.youtubeUrl !== "" &&
        el.youtubeUrl.startsWith("https://www.youtube.com/")
    );
    if (data) {
      // setNewData((prev) => [...prev, ...youTubeList]);
      setPrevData((prev) => [...prev, ...youTubeList]);
    }
  };

  useEffect(() => {
    youTubeData();
    if (pageNum < Math.ceil(boardCounts?.fetchBoardsCount / 10)) {
      setPageNum((prev) => prev + 1);
    }
  }, [data]);

  const pushClick = (e) => {
    router.push("/notice/" + e.currentTarget.id);
  };

  const createClick = () => {
    router.push("/notice/new");
  };

  return (
    <PBoardList
      pushClick={pushClick}
      createClick={createClick}
      newData={newData}
      setNewData={setNewData}
      prevData={prevData}
    />
  );
}
