import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyButton from "../../src/commons/buttons/01";
import Input01 from "../../src/commons/inputs/01";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContent?: string;
  typeName?: number;
}

export default function ReactHookForm() {
  const schema = yup.object().shape({
    name: yup.string().required("필수입력 창입니다."),
    password: yup
      .string()
      .min(4, "비밀번호는 네 자리 이상 입력해주세요.")
      .max(15, "비밀번호는 최대 열 다섯 자리 이내로 입력해주세요.")
      .required("비밀번호를 입력해주세요."),
    email: yup
      .string()
      .email("이메일 형식이 아닙니다.")
      .required("필수입력 창입니다."),
    website: yup.string().url("형식이 올바르지 않습니다."),
    // createdOn: yup.date().default(function () {
    //   return new Date();
    // }),
  });

  const { register, handleSubmit, formState } = useForm({
    // mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input01 type="text" register={register("name")} text="이름" />
      <>{formState.errors.name?.message}</>
      <br />
      <Input01 type="text" register={register("password")} text="비밀번호" />
      <>{formState.errors.password?.message}</>
      <br />
      <Input01 type="text" register={register("email")} text="이메일" />
      <>{formState.errors.email?.message}</>
      <br />
      <MyButton type="submit" isValid={formState.isValid} text="로그이인" />
    </form>
  );
}
