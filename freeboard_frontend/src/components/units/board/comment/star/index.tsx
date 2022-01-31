import React, { useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const StarReview = styled.div``;

export default function StarPage({
  setRating,
  commentRating,
  isComment,
  starNum,
  setStarNum,
}) {
  // const [starNum, setStarNum] = useState(0);
  const defaultStar = [];
  const commentStar = [];
  const finishStar = [];

  const byebye = (i) => {
    setStarNum(i);
    setRating(i);
  };

  for (let i = 0; i < 5; i++) {
    defaultStar.push(<StarOutlined key={i} onClick={() => byebye(i + 1)} />);
    finishStar.push(<StarOutlined key={i} onClick={() => byebye(i + 1)} />);
  }

  // eslint-disable-next-line array-callback-return
  const aaa = defaultStar.map((el, index) => {
    if (index < starNum) {
      defaultStar[index] = <></>;
      return (el = (
        <StarOutlined
          key={index}
          onClick={() => byebye(index + 1)}
          style={{ color: "#FFD600" }}
        />
      ));
    }
  });

  for (let i = 0; i < 5; i++) {
    if (i < commentRating)
      commentStar.push(<StarOutlined key={i} style={{ color: "#FFD600" }} />);
    if (i >= commentRating) commentStar.push(<StarOutlined key={i} />);
  }

  const STARARR = isComment ? [commentStar] : [aaa, ...defaultStar];

  return STARARR;
}
