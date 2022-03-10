import BoardCommentListUI from "./CommentList.presenter";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import * as S from "./CommentList.styles";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "./CommentList.queries";
import { useAuth } from "../../../../commons/hooks/useAuth";

export default function CommentListContainer() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.board) },
  });

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev?.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <S.Fragment>
      <BoardCommentListUI data={data} onLoadMore={onLoadMore} />
    </S.Fragment>
  );
}
