import PBoardCreate from "./BoardCreate.presenter";
import { ChangeEvent, useState, useEffect, useRef } from "react";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardCreate.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IBoardCreateProps } from "./BoardCreate.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export default function CreateBoard({ isEdit, data }: IBoardCreateProps) {
  const router = useRouter();
  const fileRef = useRef();
  const [msg1, setMsg1] = useState(false);
  const [msg2, setMsg2] = useState(false);
  const [msg3, setMsg3] = useState(false);
  const [msg4, setMsg4] = useState(false);
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");
  const [youTubeUrl, setYouTubeUrl] = useState("");
  const [onBtn, setOnBtn] = useState(true);
  const [allData, setAllData] = useState("");
  const [modaltime, setModaltime] = useState(false);
  const [image, setImage] = useState(new Array(3).fill("1"));

  const [clientData] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateData] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const checkWording1 = (e: ChangeEvent<HTMLInputElement>) => {
    setWord1(e.target.value);
    if (e.target.value === "") {
      setMsg1(true);
    } else {
      setMsg1(false);
    }
    if (e.target.value && word2 && word3 && word4) {
      setOnBtn(false);
    }
  };
  const checkWording2 = (e: ChangeEvent<HTMLInputElement>) => {
    setWord2(e.target.value);
    if (e.target.value === "") {
      setMsg2(true);
    } else {
      setMsg2(false);
    }
    if (e.target.value && word1 && word3 && word4) {
      setOnBtn(false);
    }
  };
  const checkWording3 = (e: ChangeEvent<HTMLInputElement>) => {
    setWord3(e.target.value);
    if (e.target.value === "") {
      setMsg3(true);
    } else {
      setMsg3(false);
    }
    if (e.target.value && word2 && word1 && word4) {
      setOnBtn(false);
    }
  };
  const checkWording4 = (e: ChangeEvent<HTMLInputElement>) => {
    setWord4(e.target.value);
    if (e.target.value === "") {
      setMsg4(true);
    } else {
      setMsg4(false);
    }
    if (e.target.value && word2 && word3 && word1) {
      setOnBtn(false);
    }
  };

  const getUTubeUrl = (e) => {
    setYouTubeUrl(e.target.value);
  };

  const btnClick = async () => {
    if (word1 !== "" && word2 !== "" && word3 !== "" && word4 !== "") {
      const result = await clientData({
        variables: {
          createBoardInput: {
            writer: word1,
            password: word2,
            title: word3,
            contents: word4,
            youtubeUrl: youTubeUrl,
            images: image,
          },
        },
      });

      router.push("/notice/" + result.data?.createBoard._id);

      setAllData(`게시글 작성에 성공하셨습니다. ID:
          ${result.data?.createBoard._id}`);
      setModaltime(true);
    } else {
      setAllData("작성 내용을 다시 입력해주세요");
      setModaltime(true);
    }

    if (word1 === "") {
      setMsg1(true);
    }
    if (word2 === "") {
      setMsg2(true);
    }
    if (word3 === "") {
      setMsg3(true);
    }
    if (word4 === "") {
      setMsg4(true);
    }
  };

  const btnEdit = async () => {
    interface IMyvariables {
      boardId: string;
      password: string;
      updateBoardInput: {
        title?: string;
        contents?: string;
        youtubeUrl?: string;
      };
    }

    const myVariables: IMyvariables = {
      updateBoardInput: {},
      boardId: String(router.query.aaa),
      password: word2,
    };

    if (word3 !== "") myVariables.updateBoardInput.title = word3;
    if (word4 !== "") myVariables.updateBoardInput.contents = word4;
    if (youTubeUrl !== "") myVariables.updateBoardInput.youtubeUrl = youTubeUrl;

    try {
      const result = await updateData({
        variables: myVariables,
      });
      if (!msg3 && !msg4) {
        router.push(`/notice/${result.data?.updateBoard._id}`);
        setAllData(`게시글 수정에 성공하셨습니다. ID: ${router.query.aaa}`);
        setModaltime(true);
      } else {
        setAllData("작성 내용을 다시 입력해주세요");
        setModaltime(true);
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const file = e.target.files?.[0];
    console.log(file);

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    const newImage = result.data?.uploadFile.url;

    if (newImage) {
      const newArr = [newImage, ...image];
      newArr.pop();
      setImage([...newArr]);
    }

    console.log(image);
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };

  useEffect(() => {
    if (modaltime === true) {
      setTimeout(() => {
        setModaltime(false);
      }, 1000);
    }
  }, [modaltime]);

  return (
    <PBoardCreate
      msg1={msg1}
      msg2={msg2}
      msg3={msg3}
      msg4={msg4}
      checkWording1={checkWording1}
      checkWording2={checkWording2}
      checkWording3={checkWording3}
      checkWording4={checkWording4}
      onBtn={onBtn}
      btnClick={btnClick}
      allData={allData}
      modaltime={modaltime}
      isEdit={isEdit}
      btnEdit={btnEdit}
      word1={word1}
      word2={word2}
      word3={word3}
      word4={word4}
      getUTubeUrl={getUTubeUrl}
      data={data}
      image={image}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      onClickImage={onClickImage}
    />
  );
}
