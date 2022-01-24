import { useState } from "react";
import { Rate } from "antd";

export default function LibraryRatePage() {
  const [value, setValue] = useState(3);
  const [num, setNum] = useState("점수를 입력해주세요");

  const handleChange = (value: number) => {
    setValue(value);
    if (value === 1) {
      setNum("1점");
    } else if (value === 2) {
      setNum("2점");
    } else if (value === 3) {
      setNum("3점");
    } else if (value === 4) {
      setNum("4점");
    } else if (value === 5) {
      setNum("5점");
    }
  };
  return (
    <>
      <Rate onChange={handleChange} value={value} />
      {num}
    </>
  );
}
