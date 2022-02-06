import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OpenapiPage() {
  const [url, setUrl] = useState("");

  const getDogsImg = async () => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    if (result) {
      console.log(result);
      setUrl(result.data.message);
    }
  };

  useEffect(() => {
    getDogsImg();
  }, []);

  return (
    <>
      <div>
        <div>open Api 연습</div>
        <img src={url} width="50%" height="50%" />
      </div>
    </>
  );
}
