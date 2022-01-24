import React from "react";
import { useRouter } from "next/router";
import PBoardList from "./BoardList.presenter";
import { FETCH_BOARDS, DELETE_BOARD } from "./BoardList.queries";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useState } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const [checkItems, setCheckItems] = useState([]);

  const [deleteBoard] = useMutation(DELETE_BOARD, {
    variables: {
      endDate: 0,
      startDate: 0,
      search: "",
      page: 1,
    },
  });

  const onClickDelete = (e) => {
    // interface IBoardId {
    //     boardId: string
    // }

    // const myvariables:IBoardId = {
    //     boardId : e.target.name
    // }

    deleteBoard({
      variables: { boardId: e.target.name },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
          endDate: 0,
          startDate: 0,
          search: "",
          page: 1,
        },
      ],
    });
    setCheckItems(checkItems.filter((_id) => _id !== e.target.name));
  };

  const onClickDeleteAll = (ids) => {
    console.log("실행은됨");
    ids.map((id) => {
      deleteBoard({
        variables: { boardId: id },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            endDate: 0,
            startDate: 0,
            search: "",
            page: 1,
          },
        ],
      });
    });
    setCheckItems([]);
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter((_id) => _id !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      data.fetchBoards.forEach((el) => idArray.push(el._id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const pushClick = (id) => {
    router.push("/notice/" + id);
  };

  const createClick = () => {
    router.push("/notice/new");
  };

  return (
    <PBoardList
      data={data}
      onClickDelete={onClickDelete}
      handleAllCheck={handleAllCheck}
      checkItems={checkItems}
      handleSingleCheck={handleSingleCheck}
      onClickDeleteAll={onClickDeleteAll}
      setCheckItems={setCheckItems}
      pushClick={pushClick}
      createClick={createClick}
    />
  );
}
