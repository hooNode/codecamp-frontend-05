import React, { useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const StarReview = styled.div``;

export default function StarPage({ setRating }) {
  const [starNum, setStarNum] = useState(0);
  const defaultStar = [];

  const byebye = (i) => {
    setStarNum(i);
    setRating(i);
  };

  for (let i = 0; i < 5; i++) {
    defaultStar.push(<StarOutlined key={i} onClick={() => byebye(i + 1)} />);
  }

  // eslint-disable-next-line array-callback-return
  const aaa = defaultStar.map((el, index) => {
    if (index < starNum) {
      defaultStar[index] = <></>;
      return (
        <StarOutlined
          key={index}
          onClick={() => byebye(index + 1)}
          style={{ color: "#FFD600" }}
        />
      );
    }
  });
  const STARARR = [aaa, ...defaultStar];

  return STARARR;
}
