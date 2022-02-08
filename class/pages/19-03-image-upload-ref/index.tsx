import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { validationFile } from "../../src/commons/libraries/utils";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const fileRef = useRef();
  const [image, setImage] = useState<string>("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    setImage(result.data?.uploadFile.url || "");
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <img src={`https:/storage.googleapis.com/${image}`} />
      {/* // 여러파일을 동시에 드래그해서 업로드 하고 싶을 땐 multiple */}
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </div>
  );
}
