import React, { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../_app";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);

  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { email, password } = inputs;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      if (setAccessToken) {
        setAccessToken(accessToken || "");
        localStorage.setItem("accessToken", accessToken || "");
        console.log("==============================");
        console.log(localStorage.getItem("accessToken"));
        console.log("==============================");
      }

      router.push("/22-02-login-success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <>
      이메일:
      <input
        name="email"
        type="text"
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      비밀번호:
      <input
        name="password"
        type="password"
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
