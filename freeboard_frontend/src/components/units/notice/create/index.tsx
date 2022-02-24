import { gql, useMutation } from "@apollo/client";
import React, { useContext, useEffect, useRef, useState } from "react";
import PCreatePage from "./Pcreate";
import { CREATE_USEDITEM, UPLOAD_FILE } from "./create.query";
import { useAuth } from "../../../commons/hooks/useAuth";
import { GlobalContext } from "../../../../../pages/_app";

export default function CreatePage() {
  const fileRef = useRef();

  const { isLoading } = useAuth();
  if (isLoading) <></>;
  const { useInfo } = useContext(GlobalContext);

  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: "",
    seller: "",
    tags: [],
  });

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (e) => {
    try {
      const file = e.target.files?.[0];

      const result = await uploadFile({
        variables: {
          file,
        },
      });

      const newImage = result.data?.uploadFile.url;
      const newImageId = result.data?.uploadFile.url;

      if (newImage) {
        const newArr = [newImage];
        const newArrId = [newImageId];
        setImages([...images, ...newArr]);
        setImageId([...images, ...newArrId]);
      }
    } catch (e) {
      if (e instanceof Error) setImages([...images]);
    }
  };

  const editImage = (e) => {
    setImages(images.filter((image) => e.target.id !== image));
  };

  const onChangeInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickItem = async () => {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: inputs.name,
            remarks: inputs.remarks,
            contents: inputs.contents,
            price: Number(inputs.price),
            images,
          },
        },
      });
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      console.log(JSON.parse(localStorage.getItem("userInfo")).name);
    }
  }, []);

  return (
    <PCreatePage
      onChangeInputs={onChangeInputs}
      onClickItem={onClickItem}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      images={images}
      editImage={editImage}
      imageId={imageId}
    />
  );
}
