import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import SignupPagePresenter from "./Psignup";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SignupPageContainer() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [loginUser] = useMutation<Pick<IMutation, "loginUser">>(LOGIN_USER);

  const onClickCreateUser = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: inputs.email,
            password: inputs.password,
            name: inputs.name,
          },
        },
      });
      const result = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";
      if (setAccessToken) {
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken || "");
      }
      if (setUserInfo) {
        setUserInfo({ email: inputs.email, name: inputs.name });
      }

      router.push("/");
    } catch (e) {
      if (e instanceof Error) console.dir(e);
    }
  };

  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <SignupPagePresenter
      onClickCreateUser={onClickCreateUser}
      onChangeInputs={onChangeInputs}
      inputs={inputs}
    />
  );
}
