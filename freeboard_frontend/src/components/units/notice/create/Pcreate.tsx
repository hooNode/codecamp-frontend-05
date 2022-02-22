import React from "react";
import * as S from "./style";

export default function PCreatePage({ onChangeInputs, onClickItem }) {
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
              <S.AddressImg>지도</S.AddressImg>
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
          <S.PicturImg>
            <div>+</div>
            <span>Upload</span>
          </S.PicturImg>
        </S.ItemContainer>
        <S.BtnBox>
          <S.CreateBtn onClick={onClickItem}>등록하기</S.CreateBtn>
        </S.BtnBox>
      </S.Container>
    </S.Wrapper>
  );
}
