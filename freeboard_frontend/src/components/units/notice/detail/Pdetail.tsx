import styled from "@emotion/styled";
import { useEffect } from "react";
import GetDate from "../../board/list/GetDate";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import * as S from "./style";
import Dompurify from "dompurify";

const SliderBox = styled(Slider)`
  width: 55vw;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  .slick-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .slick-track {
    display: flex;
    width: 100%;
    max-height: 500px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .slick-cloned {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .slick-current {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .slick-activate {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .slick-slide {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function PDetailPage({ data, isLoading }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <S.Wrapper>
      <S.TopBox />
      <S.Container>
        <S.CarouselBox>
          {isLoading || (
            <SliderBox {...settings}>
              {data?.fetchUseditem?.images.map((el, index) => (
                <ImageContainer key={index}>
                  {el?.endsWith(".png" || "jpeg") ? (
                    <ImageBox
                      src={`https:/storage.googleapis.com/${data?.fetchUseditem?.images[index]}`}
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <ImageBox src={"/no-image-icon-6.png"} />
                  )}
                </ImageContainer>
              ))}
            </SliderBox>
          )}
        </S.CarouselBox>
        <S.ProfileBox>
          {data?.fetchUseditem?.seller.picture ? (
            <S.ProfilePic
              src={`https:/storage.googleapis.com/${data?.fetchUseditem?.seller.picture}`}
            />
          ) : (
            <S.ProfilePic src={"/noProfile.jpeg"} />
          )}

          <S.ProfileWord>
            <S.ProfileName>{data?.fetchUseditem?.seller.name}</S.ProfileName>
            <S.ProfilePlace>
              {data?.fetchUseditem?.useditemAddress.address}
            </S.ProfilePlace>
          </S.ProfileWord>
        </S.ProfileBox>
        <S.ContentsBox>
          <S.ContentsTitle>
            <div>{data?.fetchUseditem?.name}</div>
            <S.ContentsPrice>
              {String(data?.fetchUseditem?.price)
                .split("")
                .map((el, index) => {
                  if (
                    String(data?.fetchUseditem?.price).length >= 4 &&
                    (String(data?.fetchUseditem?.price).length - index) % 3 ===
                      0 &&
                    index !== 0
                  ) {
                    return `,${el}`;
                  } else {
                    return el;
                  }
                })}
              원
            </S.ContentsPrice>
          </S.ContentsTitle>
          <S.ContentsSubTitle>
            {data?.fetchUseditem?.createdAt && (
              <GetDate data={data?.fetchUseditem} />
            )}

            <S.ContentsTags>
              {data?.fetchUseditem?.tags.map((tag, index) => (
                <S.TagItem key={index}>#{tag}</S.TagItem>
              ))}
            </S.ContentsTags>
          </S.ContentsSubTitle>
          <S.ContentsText>
            <S.ContentsMain>
              {data?.fetchUseditem?.contents.includes("</") ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      String(data?.fetchUseditem?.contents)
                    ),
                  }}
                ></div>
              ) : (
                <>{data?.fetchUseditem?.contents}</>
              )}
            </S.ContentsMain>
            <br />
            <S.ContentsRemarks>
              <S.SubRemarks>| 요약</S.SubRemarks> {data?.fetchUseditem.remarks}
            </S.ContentsRemarks>
          </S.ContentsText>
          <S.ContentsLikeCount></S.ContentsLikeCount>
        </S.ContentsBox>
        <S.CommentsBox></S.CommentsBox>
      </S.Container>
    </S.Wrapper>
  );
}
