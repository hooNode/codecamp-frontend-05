import { gql, useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
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
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    const isValid = validationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    console.log(result);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
    </>
  );
}
