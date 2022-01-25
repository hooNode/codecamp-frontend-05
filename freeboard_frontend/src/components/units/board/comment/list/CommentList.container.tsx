import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import PBoardDetail from "./BoardDetail.presenter";
import { FETCH_BOARD, CREATE_BOARD_COMMENT } from "./CommentList.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function DynamicRoutePage() {
  const router = useRouter();
  const [commentData] = useMutation(CREATE_BOARD_COMMENT);
  const [writer, setWriter] = useState("");
  const [contents, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0.0);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.aaa),
      },
    }
  );

  const writerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  //////여기부터 이어서 하면 됨
  // const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {};
  // const constentsChange = (e: ChangeEvent<HTMLInputElement>) => {};
  // const ratingChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const btnClick = async () => {
    const result = await commentData({
      variables: {
        createBoardComment: {
          writer: writer,
          password: password,
          contents: contents,
          rating: rating,
        },
        boardId: router.query.aaa,
      },
    });
  };
  return <PBoardDetail data={data} btnClick={btnClick} />;
}
