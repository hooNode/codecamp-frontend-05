import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
  const [searchText, setSearchText] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  console.log(data);

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  const onClickSearch = () => {
    refetch({
      search: searchText,
      page: 1,
    });
    setSearchKeyword(searchText);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const onClickPage = (e) => {
    refetch({
      page: Number(e.target.id),
      search: searchKeyword,
    });
  };

  return (
    <div>
      <h1>검색 페이지!</h1>
      검색어입력:{" "}
      <input type="text" onChange={onChangeSearch} onKeyPress={onKeyPress} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => {
        return (
          <div key={el._id}>
            <br />
            <span>제목: {el.title}</span>
            <br />
            <span>작성자: {el.writer}</span>
            <br />
          </div>
        );
      })}
      {new Array(10).fill("1").map((_, index) => {
        return (
          <>
            <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
              {` ${index + 1} `}
            </span>
          </>
        );
      })}
    </div>
  );
}
