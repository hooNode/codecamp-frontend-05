import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../components/commons/layout/index";
import PBoardList from "./BoardList.presenter";
import { BOARD_COUNTS, FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const { setBestYoutube } = useContext(GlobalContext);
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

  const pushClick = (e) => {
    router.push("/notice/" + e.currentTarget.id);
  };

  const createClick = () => {
    router.push("/notice/new");
  };
  useEffect(() => {
    youTubeData();
    if (pageNum < Math.ceil(boardCounts?.fetchBoardsCount / 10)) {
      setPageNum((prev) => prev + 1);
    }
  }, [data]);

  useEffect(() => {
    setBestYoutube(prevData);
  });

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
