// 디스코드 개발자

import axios from "axios";
import { useEffect } from "react";

export default function OpenGraphPreview() {
  useEffect(() => {
    const getOpenGraph = async () => {
      const result = await axios.get("https://www.gmarket.co.kr/");
      console.log(result.data);
    };
    getOpenGraph();
  }, []);
  return <div></div>;
}
