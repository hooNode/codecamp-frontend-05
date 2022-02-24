import React, { useEffect } from "react";
import * as S from "./style";
import Head from "next/head";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function PCreatePage({
  onChangeInputs,
  onClickItem,
  onClickImage,
  onChangeFile,
  fileRef,
  images,
  editImage,
  imageId,
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9997524bd009f644dd961f73e5fcd9a7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>상품등록</S.Title>
        <S.ItemContainer>
          <S.ItmeTitle>
            <S.Label>상품명</S.Label>
            <S.ItemInput name="name" type="text" onChange={onChangeInputs} />
          </S.ItmeTitle>
          <S.ItmeTitle>
            <S.Label>한 줄 요약</S.Label>
            <S.ItemInput name="remarks" type="text" onChange={onChangeInputs} />
          </S.ItmeTitle>
          <S.ItmeTitle>
            <S.Label>상품설명 // webEditor</S.Label>
            <S.ItemInput
              name="contents"
              type="text"
              onChange={onChangeInputs}
            />
          </S.ItmeTitle>
          <S.ItmeTitle>
            <S.Label>판매가격</S.Label>
            <S.ItemInput name="price" type="text" onChange={onChangeInputs} />
          </S.ItmeTitle>
          <S.ItmeTitle>
            <S.Label>태그</S.Label>
            <S.ItemInput type="text" />
          </S.ItmeTitle>
          <S.AdressForm>
            <S.Label>거래장소</S.Label>
            <S.AdressLeft>
              지도
              <div id="map" style={{ width: "100%%", height: "14rem" }}></div>
            </S.AdressLeft>
            <S.AdressRight>
              <S.Label>주소</S.Label>
              <S.AdressFirst>
                <S.FindAdress>주소검색</S.FindAdress>
                <S.AdressNum type="text" />
              </S.AdressFirst>
              <S.AdressInput type="text" />
              <S.AdressInput type="text" />
            </S.AdressRight>
          </S.AdressForm>
          <S.PictureWrapper>
            <S.PicturImg onClick={onClickImage}>
              <div>+</div>
              <span>Upload</span>
            </S.PicturImg>

            {images.length !== 0 && (
              <>
                {images.map((image, index) => (
                  <S.PictureDiv key={index} onClick={editImage}>
                    <img
                      id={imageId[index]}
                      src={`https:/storage.googleapis.com/${image}`}
                      width="78px"
                      height="78px"
                    />
                  </S.PictureDiv>
                ))}
              </>
            )}
            <input
              style={{ display: "none" }}
              type="file"
              ref={fileRef}
              onChange={onChangeFile}
            />
          </S.PictureWrapper>
        </S.ItemContainer>
        <S.BtnBox>
          <S.CreateBtn onClick={onClickItem}>등록하기</S.CreateBtn>
        </S.BtnBox>
      </S.Container>
    </S.Wrapper>
  );
}
