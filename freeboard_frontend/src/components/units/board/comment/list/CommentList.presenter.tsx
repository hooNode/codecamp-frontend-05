import CommentListItems from "./CommentList.Items.presenter";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./CommentList.styles";
import { useEffect, useState } from "react";

export default function BoardCommentListUI({ onLoadMore, data }) {
  if (!data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoardComments.map((el) => (
        <CommentListItems key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
