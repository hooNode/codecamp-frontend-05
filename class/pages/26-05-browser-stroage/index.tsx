import React from "react";

export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
  };

  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    const zzz = document.cookie;
    console.log(zzz);

    const aaa = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa="))[0];
    const result = aaa.replace("aaa=", "");
    console.log(result);
  };

  const onClickGetLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClickGetSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키저장</button>
      <button onClick={onClickSaveLocal}>로컬저장</button>
      <button onClick={onClickSaveSession}>세션저장</button>
      <br />
      =================
      <br />
      <button onClick={onClickGetCookie}>쿠키조회</button>
      <button onClick={onClickGetLocal}>로컬조회</button>
      <button onClick={onClickGetSession}>세션조회</button>
    </div>
  );
}
