import { useState } from "react";
import NewFile from "./new";

export default function PaginationPage() {
  const [num, setNum] = useState(0);
  return (
    <>
      {num}
      <NewFile num={num} setNum={setNum} />
    </>
  );
}
