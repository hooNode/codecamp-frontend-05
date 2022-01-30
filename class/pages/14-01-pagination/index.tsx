import React, { useEffect, useState } from "react";
import { gql, useQuery, refetch } from "@apollo/client";

export default function PaginationPage() {
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const [pageNum, setPageNum] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: pageNum },
  });
  const [activePrevBtn, setActivePrevBtn] = useState(false);
  const [activeNextBtn, setActiveNextBtn] = useState(false);

  const onClickPage = (e) => {
    // variables를 수정하는 것
    // setPageNum((pageNum) => e.target.id);
    refetch({ page: Number(e.target.id) });
  };

  const checkData = () => {
    console.log(data?.fetchBoards.length);
  };

  const prevPage = () => {
    setPageNum((pageNum) => pageNum - 10);
    // refetch({ page: pageNum - 10 });
  };
  const nextPage = () => {
    setPageNum((pageNum) => pageNum + 10);
    // refetch({ page: pageNum + 10 });
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

  return (
    <div>
      <div>페이지네이션 연습!!</div>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id} onClick={checkData}>
          제목은{el.title} 작성자:{el.writer}
        </div>
      ))}
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

      {/*       
        <span onClick={onClickPage} id="1">1</span>
        <span onClick={onClickPage} id="2">2</span>
        <span onClick={onClickPage} id="3">3</span>
      */}
    </div>
  );
}
