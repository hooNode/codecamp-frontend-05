import React from "react";
import * as S from "./style";
import Dompurify from "dompurify";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function PListPage({ data, onClickDetail }) {
  const { moveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.TopBox></S.TopBox>
      <S.TopTitle>중고상품</S.TopTitle>
      <S.Container>
        {data?.fetchUseditems?.map((item, index) => (
          <S.ItemListWapper id={item._id} key={index} onClick={onClickDetail}>
            {item.images.length > 0 && item.images[0].includes(".") ? (
              <S.ItemImageBox>
                <img
                  id={item.images[0]}
                  src={`https://storage.googleapis.com/${item.images[0]}`}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                />
              </S.ItemImageBox>
            ) : (
              <S.ItemNoneImageBox>
                <S.ItemImageBoxFont>No Image</S.ItemImageBoxFont>
                <MdOutlineDoNotDisturb
                  style={{ width: "100%", height: "100%", color: "gray" }}
                />
              </S.ItemNoneImageBox>
            )}
            <S.ContentBox>
              <S.TagBox>
                {item.tags.map((tag, index) => (
                  <S.TagItem id={index} key={index}>
                    #{tag}
                  </S.TagItem>
                ))}
              </S.TagBox>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemRemarks>{item.remarks}</S.ItemRemarks>
              <S.ItemPrice>
                {String(item.price)
                  .split("")
                  .map((el, index) => {
                    if (
                      String(item.price).length >= 4 &&
                      (String(item.price).length - index) % 3 === 0 &&
                      index !== 0
                    ) {
                      return `,${el}`;
                    } else {
                      return el;
                    }
                  })}
                원
              </S.ItemPrice>
            </S.ContentBox>
          </S.ItemListWapper>
        ))}
      </S.Container>
      <S.FixedIcon onClick={moveToPage("/boards/new")}>
        <AiFillPlusCircle style={{ color: "#f9961e", fontSize: "80px" }} />
      </S.FixedIcon>
    </S.Wrapper>
  );
}
