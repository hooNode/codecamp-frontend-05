import { gql, useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import PCreatePage from "./Pcreate";
import { CREATE_USEDITEM } from "./create.query";
import { useAuth } from "../../../commons/hooks/useAuth";
import { GlobalContext } from "../../../../../pages/_app";

export default function CreatePage() {
  const { isLoading } = useAuth();
  if (isLoading) <></>;
  const { useInfo } = useContext(GlobalContext);
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [inputs, setInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: "",
    seller: "",
    tags: [],
  });

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      console.log(JSON.parse(localStorage.getItem("userInfo")).name);
    }
  }, []);

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
          },
        },
      });
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };

  return (
    <PCreatePage onChangeInputs={onChangeInputs} onClickItem={onClickItem} />
  );
}
