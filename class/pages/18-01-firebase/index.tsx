import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";
import { v4 as uuidv4 } from "uuid";

export default function FirebasePage() {
  const uuid = uuidv4();
  const onClickSubmit = async () => {
    // firebase에 한 줄 등록하기
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "제목",
      contents: "내용",
      id: uuid,
    });
  };
  const onClickFetch = async () => {
    // firebase에서 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  };

  return (
    <>
      <h1>파이어베이스 연습 페이지입니다.</h1>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
