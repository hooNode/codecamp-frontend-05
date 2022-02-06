import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import UICommentWrite from "./CommentWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.container";

export default function CommentWrite() {
  const router = useRouter();
  const [commentData] = useMutation(CREATE_BOARD_COMMENT);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [starNum, setStarNum] = useState(0);

  const writerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const contentsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const ratingChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setRating(e.target.value);
    console.log(rating);
  };

  const btnClick = async () => {
    try {
      const result = await commentData({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: Number(rating),
          },
          boardId: String(router.query.aaa),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.aaa) },
          },
        ],
      });
      console.log(result.data?.createBoardComment._id);
      setRating(0);
      setWriter("");
      setPassword("");
      setContent("");
      setStarNum(0);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <UICommentWrite
      btnClick={btnClick}
      writerChange={writerChange}
      passwordChange={passwordChange}
      contentsChange={contentsChange}
      ratingChange={ratingChange}
      setRating={setRating}
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      setStarNum={setStarNum}
      starNum={starNum}
    />
  );
}
