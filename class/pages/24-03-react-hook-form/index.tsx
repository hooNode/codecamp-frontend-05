import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContent?: string;
  typeName?: number;
}

export default function ReactHookForm() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup
      .number()
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
      비밀번호:
      <input
        {...register("password", { required: true, pattern: /^[0-9]+$/ })}
      />
      <>{formState.errors.password.message}</>
      이메일
      <input {...register("email")} />
      사이트
      <select {...register("website")}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="submit" />
    </form>
  );
}
