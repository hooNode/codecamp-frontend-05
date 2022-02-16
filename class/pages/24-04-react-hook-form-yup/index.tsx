import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContent?: string;
  typeName?: number;
}
interface myBtnStyle {
  isValid?: boolean;
}

const BtnStyle = styled.button`
  background: ${(props: myBtnStyle) => (props.isValid ? "red" : "blue")};
`;

export default function ReactHookForm() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup
      .string()
      .min(4, "비밀번호는 네 자리 이상 입력해주세요.")
      .max(15, "비밀번호는 최대 열 다섯 자리 이내로 입력해주세요.")
      .required("비밀번호를 입력해주세요."),
    email: yup
      .string()
      .email("이메일 형식이 아닙니다.")
      .required("필수입력창입니다."),
    website: yup.string().url("형식이 올바르지 않습니다."),
    // createdOn: yup.date().default(function () {
    //   return new Date();
    // }),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>이름:</>
      <input {...register("name")} />
      <>{formState.errors.name?.message}</>
      <br />
      비밀번호:
      <input
        {...register("password", { required: true, pattern: /^[0-9]+$/ })}
      />
      <>{formState.errors.password?.message}</>
      <br />
      이메일
      <input {...register("email")} />
      <>{formState.errors.email?.message}</>
      <br />
      <BtnStyle isValid={formState.isValid}>등로옥</BtnStyle>
    </form>
  );
}
