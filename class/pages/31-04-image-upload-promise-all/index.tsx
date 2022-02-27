import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
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
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [uplcreateBoardoadFile] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (!file) {
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          console.log(data.target?.result);
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    // 1. createBoard로 게시물 등록하기
    //    - uploadFile()
    const start = performance.now();
    const results = await Promise.all(
      files?.map((el) =>
        uploadFile({
          variables: {
            file: el,
          },
        })
      )
    );

    const resultUrls = results.map((el) =>
      el.data ? el.data?.uploadFile.url : ""
    );
    const end = performance.now();

    console.log(end - start);

    // const imageUrl = result.data?.uploadFile.url || "";
    // 2. createBoard로 게시물 등록하기
    //    - writer, title, contents 전송
    //    - imageUrl 전송
    const result2 = await uplcreateBoardoadFile({
      variables: {
        createBoardInput: {
          title: "제목임둥",
          writer: "영희",
          password: "1234",
          contents: "연습용 이미지",
          images: resultUrls,
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };
  return (
    <div>
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
