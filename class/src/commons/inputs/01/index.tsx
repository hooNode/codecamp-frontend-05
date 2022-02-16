import React from "react";

export default function Input01({ type, register, text }) {
  return (
    <>
      {text}
      <input type={type} {...register} />
      {/* <>이름:</>
      <input {...register("name")} />
      <>{formState.errors.name?.message}</>
      <br /> */}
    </>
  );
}
