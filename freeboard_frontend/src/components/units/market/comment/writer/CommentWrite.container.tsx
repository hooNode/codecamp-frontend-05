import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import UICommentWrite from "./CommentWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./CommentWrite.queries";
import { useAuth } from "../../../../commons/hooks/useAuth";

export default function CommentWrite() {
  const { isLoading } = useAuth();

  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [contents, setContent] = useState("");

  const contentsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const btnClick = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.board),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.board) },
          },
        ],
      });
      setContent("");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <UICommentWrite
      btnClick={btnClick}
      contentsChange={contentsChange}
      contents={contents}
    />
  );
}
