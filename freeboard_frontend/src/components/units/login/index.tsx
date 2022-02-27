import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import LoginPagePreseneter from "./Plogin";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPageContainer() {
  const client = useApolloClient();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [loginUser] = useMutation(LOGIN_USER);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onClickLoginUser = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
      if (setAccessToken) {
        setAccessToken(accessToken);
      }
      if (setUserInfo) {
        setUserInfo(userInfo);
      }

      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"));

      history.back();
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
    <LoginPagePreseneter
      onClickLoginUser={onClickLoginUser}
      onChangeInputs={onChangeInputs}
    />
  );
}
