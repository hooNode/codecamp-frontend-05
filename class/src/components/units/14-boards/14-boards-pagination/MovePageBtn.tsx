import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export default function movePageBtn(props) {
  const [pageNum, setPageNum] = useState(1);
  const [activePrevBtn, setActivePrevBtn] = useState(false);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const prevPage = () => {
    setPageNum((pageNum) => pageNum - 10);
    props.refetch({ page: pageNum - 10 });
  };
  const nextPage = () => {
    setPageNum((pageNum) => pageNum + 10);
    props.refetch({ page: pageNum + 10 });
  };

  useEffect(() => {
    if (pageNum !== 1) {
      setActivePrevBtn(false);
    } else {
      setActivePrevBtn(true);
    }
    if (lastPage < pageNum + 10) {
      setActiveNextBtn(true);
    } else {
      setActiveNextBtn(false);
    }
  }, [pageNum]);

  const onClickPage = () => {
    // variables를 수정하는 것
    // setPageNum((pageNum) => e.target.id);

    props.refetch({ page: Number(e.target.id) });
  };

  return (
    <>
      <button onClick={prevPage} disabled={activePrevBtn}>
        {" "}
        prev{" "}
      </button>
      {new Array(10).fill("1").map((_, index) => {
        return (
          index + pageNum <= lastPage && (
            <>
              <span
                key={index + pageNum}
                onClick={onClickPage}
                id={String(index + pageNum)}
              >
                {` ${index + pageNum} `}
              </span>
            </>
          )
        );
      })}
      <button onClick={nextPage} disabled={activeNextBtn}>
        {" "}
        next{" "}
      </button>
    </>
  );
}
