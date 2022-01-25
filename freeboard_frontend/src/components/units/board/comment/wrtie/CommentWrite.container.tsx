import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import UICommentWrite from "./CommentWrite.presenter";
import { FETCH_BOARD, CREATE_BOARD_COMMENT } from "./CommentWrite.queries";

export default function CommentWrite() {
  const router = useRouter();
  const [commentData] = useMutation(CREATE_BOARD_COMMENT);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContent] = useState("");
  const [rating, setRating] = useState(0);

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
    });
  };

  return (
    <UICommentWrite
      btnClick={btnClick}
      writerChange={writerChange}
      passwordChange={passwordChange}
      contentsChange={contentsChange}
      ratingChange={ratingChange}
      setRating={setRating}
    />
  );
}
