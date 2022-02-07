import React, { MouseEvent, useEffect } from "react";
import { useRouter } from "next/router";
import PBoardList from "./BoardList.presenter";
import { FETCH_BOARDS, DELETE_BOARD } from "./BoardList.queries";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useState } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const [checkItems, setCheckItems] = useState([]);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [newData, setNewData] = useState<Array<any>>([]);

  const youTubeData = () => {
    const youTubeList = data?.fetchBoards.filter((el) => el.youtubeUrl !== "");
    setNewData((youTubeList && [...youTubeList]) || []);
  };

  const onClickDelete = async (e: MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    interface IBoardId {
      boardId: string;
    }

    const myvariables: IBoardId = {
      boardId: target.name,
    };

    await deleteBoard({
      variables: myvariables,
      refetchQueries: [
        {
          query: FETCH_BOARDS,
        },
      ],
    });
    setCheckItems(checkItems.filter((_id) => _id !== target.name));
  };

  const onClickDeleteAll = (ids: string[]) => {
    console.log("실행은됨");
    ids.map((id) => {
      deleteBoard({
        variables: { boardId: id },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
    });
    setCheckItems([]);
  };

  const handleSingleCheck = (checked: boolean, id: string) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter((_id) => _id !== id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
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

  useEffect(() => {
    if (data) youTubeData();
  }, [data]);
  console.log(newData);

  return (
    <PBoardList
      data={data}
      onClickDelete={onClickDelete}
      handleAllCheck={handleAllCheck}
      checkItems={checkItems}
      handleSingleCheck={handleSingleCheck}
      onClickDeleteAll={onClickDeleteAll}
      pushClick={pushClick}
      createClick={createClick}
    />
  );
}
