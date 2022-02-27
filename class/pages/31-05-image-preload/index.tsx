import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [loaded, setLoaded] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const img = new Image();
    img.src = "";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickImagePreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  const onClickImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div>
      ======================== 이미지 프리 로드 ================================
      {/* <div ref={divRef}></div> */}
      <button onClick={onClickImagePreLoad}>이미지 프리로드</button>
      ======================== 이미지 일반 로드 ================================
      {/* {loaded && <img src= />} */}
      <button onClick={onClickImageLoad}>이미지 일반로드</button>
    </div>
  );
}
