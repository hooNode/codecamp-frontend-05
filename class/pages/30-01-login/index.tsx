import { useMutation, gql, useQuery, useApolloClient } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { getAccessToken } from "../../src/commons/libraries/getAccessToken";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUserExample({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      if (setAccessToken) setAccessToken(accessToken || "");
      localStorage.setItem("accessToken", accessToken || "");
      // 로그인 성공 페이지로 이동하기!!
      router.push("/30-02-login-success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });

      // 4. 재발급 받은 accessToken 저장하기
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기!!!</button>
    </div>
  );
}
