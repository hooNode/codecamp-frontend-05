import { useRouter } from "next/router";
import React from "react";

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMap = () => {
    router.push("/29-03-kakao-map-routed");
  };
  return (
    <div>
      <button onClick={onClickMap}>맵보러가기</button>
    </div>
  );
}
