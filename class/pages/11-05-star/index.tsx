import React, { useState } from "react";
import { StarOutlined } from "@ant-design/icons";

export default function StarPage() {
  const [starNum, setStarNum] = useState(0);
  const [starStr, setStarStr] = useState("");
  const defaultStar = [];

  const byebye = (i) => {
    setStarNum(i);
    setStarStr(`${i}점입니당`);
    console.log(`star index ${i}`);
  };

  for (let i = 0; i < 5; i++) {
    defaultStar.push(<StarOutlined key={i} onClick={() => byebye(i + 1)} />);
  }

  // eslint-disable-next-line array-callback-return
  const aaa = defaultStar.map((el, index) => {
    if (index < starNum) {
      defaultStar[index] = <></>;
      console.log(el);
      return (
        <StarOutlined
          key={index}
          onClick={() => byebye(index + 1)}
          style={{ color: "blue" }}
        />
      );
    }
  });
  const STARARR = [aaa, ...defaultStar];

  return (
    <>
      {STARARR}
      {starStr}
    </>
  );
}
