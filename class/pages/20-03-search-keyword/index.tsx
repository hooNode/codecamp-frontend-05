import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../src/commons/types/generated/types";
import _ from "lodash";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${({ isMatched }: IProps) => (isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
  const [searchText, setSearchText] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  let timer: any;

  const onClickSearch = (e) => {
    // console.log(e.target.value);
    // refetch({
    //   search: e.target.value,
    //   page: 1,
    // });
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      console.log(e.target.value);
      refetch({
        search: e.target.value,
        page: 1,
      });
      setSearchKeyword(e.target.value);
    }, 1000);
  };

  // const onKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     onClickSearch();
  //   }
  // };

  const onClickPage = (e) => {
    refetch({
      page: Number(e.target.id),
      search: searchKeyword,
    });
  };

  return (
    <div>
      <h1>검색 페이지!</h1>
      검색어입력: <input type="text" onChange={onClickSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => {
        return (
          <div key={el._id}>
            <br />
            <span>
              제목:{" "}
              {el.title
                .replaceAll(searchKeyword, `#$%${searchKeyword}#$%`)
                .split("#$%")
                .map((el) => (
                  <Word key={uuidv4()} isMatched={el === searchKeyword}>
                    {el}
                  </Word>
                ))}
            </span>
            <br />
            <span>작성자: {el.writer}</span>
            <br />
          </div>
        );
      })}
      {new Array(10).fill("1").map((_, index) => {
        return (
          <>
            <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
              {` ${index + 1} `}
            </span>
          </>
        );
      })}
    </div>
  );
}
