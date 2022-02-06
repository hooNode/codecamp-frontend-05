import BoardCommentListUI from "./CommentList.presenter";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import * as S from "./CommentList.styles";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";

export default function CommentListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.aaa) },
  });

  const onLoadMore = () => {
    if (!data) return;
    console.log("나는 무한");
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
    console.log(data);
  };

  return (
    <S.Fragment>
      <BoardCommentListUI data={data} onLoadMore={onLoadMore} />
    </S.Fragment>
  );
}
