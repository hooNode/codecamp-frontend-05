import { gql, useMutation } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ImageUploadSubmitPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file1, setFile1] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [uplcreateBoardoadFile] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };

    // setImages([...images, file]);
  };

  const onClickSubmit = async (e) => {
    // 1. createBoard로 게시물 등록하기
    //    - uploadFile()
    const result = await uploadFile({
      variables: {
        file: file1,
      },
    });

    const imageUrl = result.data?.uploadFile.url || "";
    // 2. createBoard로 게시물 등록하기
    const result2 = await uplcreateBoardoadFile({
      variables: {
        createBoardInput: {
          title: "제목임둥",
          writer: "영희",
          password: "1234",
          contents: "연습용 이미지",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
    //    - writer, title, contents 전송
    //    - imageUrl 전송
  };
  return (
    <div>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
