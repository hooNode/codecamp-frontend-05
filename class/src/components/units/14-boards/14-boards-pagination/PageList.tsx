import React, { useEffect, useState } from "react";
import { gql, useQuery, refetch } from "@apollo/client";

export default function PaginationPage(props) {
  return (
    <div>
      <div>페이지네이션 연습!!</div>
      {props.data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          제목은{el.title} 작성자:{el.writer}
        </div>
      ))}
    </div>
  );
}
