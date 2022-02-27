import { gql, useMutation } from "@apollo/client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import PCreatePage from "./Pcreate";
import { CREATE_USEDITEM, UPLOAD_FILE } from "./create.query";
import { useAuth } from "../../../commons/hooks/useAuth";
import { GlobalContext } from "../../../../../pages/_app";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import { useRouter } from "next/router";

export default function CreatePage() {
  const fileRef = useRef();
  const router = useRouter();
  const { isLoading } = useAuth();
  if (isLoading) <></>;

  const { useInfo } = useContext(GlobalContext);

  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([]);
  const [preImages, setPreImages] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: "",
    seller: "",
    tags: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [subAddress, setSubAddress] = useState("");
  const [mapAddress, setMapAddress] = useState("");
  const [tags, setTags] = useState([]);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    const zoneAddress = data.zonecode;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    const mapCode = data.address + " " + extraAddress.replace(/[ (,)]+/g, " ");
    setIsFinish(true);

    setAddress(fullAddress);
    setZonecode(zoneAddress);
    setMapAddress(mapCode);
  };

  const modalVisible1 = () => {
    setModalVisible(true);
    setIsFinish(false);
  };
  const modalVisalbe2 = () => {
    setModalVisible(false);
    setIsFinish(false);
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (e) => {
    try {
      const file = e.target.files?.[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...preImages, data.target?.result];
          setPreImages(tempUrls);

          const tempFiles = [...files, file];
          setFiles(tempFiles);
        }
      };
    } catch (e) {
      if (e instanceof Error) {
        setFiles([...files]);
        setPreImages([...images]);
      }
    }
  };

  const editImage = (e) => {
    setPreImages(preImages.filter((image) => e.target.id !== image));
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
      const imgResults = await Promise.all(
        files?.map((el) =>
          uploadFile({
            variables: {
              file: el,
            },
          })
        )
      );

      const resultUrls = imgResults.map((el) =>
        el.data ? el.data?.uploadFile.url : ""
      );

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: inputs.name,
            remarks: inputs.remarks,
            contents: inputs.contents,
            price: Number(inputs.price),
            images: resultUrls,
            useditemAddress: {
              zipcode: zonecode,
              address: address,
              addressDetail: subAddress,
            },
            tags,
          },
        },
      });

      if (result) router.push("/boards/list");
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };
  const onChangeAddress = (e) => {
    setSubAddress(e.target.value);
  };

  const onChangeTags = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        setTags([...tags]);
      } else {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const onClickDeleteTags = (e) => {
    setTags(tags.filter((_, i) => Number(e.target.id) !== i));
  };

  return (
    <PCreatePage
      onChangeInputs={onChangeInputs}
      onClickItem={onClickItem}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      editImage={editImage}
      handleComplete={handleComplete}
      modalVisible1={modalVisible1}
      modalVisalbe2={modalVisalbe2}
      isFinish={isFinish}
      address={address}
      zonecode={zonecode}
      modalVisible={modalVisible}
      onChangeAddress={onChangeAddress}
      mapAddress={mapAddress}
      subAddress={subAddress}
      tags={tags}
      onChangeTags={onChangeTags}
      onClickDeleteTags={onClickDeleteTags}
      preImages={preImages}
    />
  );
}
