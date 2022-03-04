import React, { useEffect } from "react";
import * as S from "./style";
import Head from "next/head";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function PCreatePage({
  onChangeInputs,
  onClickItem,
  onClickImage,
  onChangeFile,
  fileRef,
  editImage,
  handleComplete,
  modalVisible,
  modalVisalbe2,
  isFinish,
  address,
  modalVisible1,
  zonecode,
  onChangeAddress,
  mapAddress,
  subAddress,
  tags,
  onChangeTags,
  onClickDeleteTags,
  preImages,
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9997524bd009f644dd961f73e5fcd9a7&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(mapAddress, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">거래장소</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [mapAddress]);
  return (
    <S.Wrapper>
      <S.TopBox></S.TopBox>
      <S.TopTitle>상품등록</S.TopTitle>
      <S.Container>
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
            <S.TagBox>
              {tags.map((tag, index) => (
                <S.TagItem id={index} key={index} onClick={onClickDeleteTags}>
                  #{tag}
                </S.TagItem>
              ))}
              <S.TagInput
                placeholder="태그를 입력해주세요."
                onKeyDown={onChangeTags}
              />
            </S.TagBox>
          </S.ItmeTitle>
          <S.AdressForm>
            <S.Label>거래장소</S.Label>
            <S.AdressLeft>
              <div id="map" style={{ width: "100%%", height: "14rem" }}></div>
            </S.AdressLeft>
            <S.AdressRight>
              <S.Label>주소</S.Label>
              <S.AdressFirst>
                <Button type="primary" onClick={modalVisible1}>
                  우편번호 검색
                </Button>
                <Modal
                  title="우편 번호"
                  style={{ top: 20 }}
                  visible={modalVisible}
                  onOk={modalVisalbe2}
                  onCancel={modalVisalbe2}
                >
                  {isFinish ? (
                    "검색을 완료했습니다."
                  ) : (
                    <DaumPostcode onComplete={handleComplete} />
                  )}
                </Modal>
                <S.AdressNum>{zonecode}</S.AdressNum>
              </S.AdressFirst>
              <S.AdressInput1>{address}</S.AdressInput1>
              <S.AdressInput2
                placeholder="상세주소를 입력해주세요"
                type="text"
                onChange={onChangeAddress}
              />
            </S.AdressRight>
          </S.AdressForm>
          <S.PictureWrapper>
            <S.PicturImg onClick={onClickImage}>
              <div>+</div>
              <span>Upload</span>
            </S.PicturImg>

            {preImages.length !== 0 && (
              <>
                {preImages.map((image, index) => (
                  <S.PictureDiv key={index} onClick={editImage}>
                    <img id={image} src={image} width="78px" height="78px" />
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
