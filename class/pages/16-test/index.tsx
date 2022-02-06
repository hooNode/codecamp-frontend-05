import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function index() {
  const router = useRouter();

  const [isChange, setIsChange] = useState(false);

  const changeIs = () => {
    setIsChange(true);
  };

  const moveToHome = () => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!");
  }, [isChange]);

  useEffect(() => {
    return () => {
      alert("Bye!");
    };
  }, []);

  return (
    <>
      <button onClick={changeIs}>변경</button>
      <button onClick={moveToHome}>이동</button>
    </>
  );
}
