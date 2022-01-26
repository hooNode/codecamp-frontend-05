import React from "react";
import Slick from "react-slick";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Div = styled.div`
  width: 100%;
  height: 200px;
  display: none;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
  }
`;

const Container = styled.div`
  width: 75%;
  height: 278px;
  padding-left: 700px;
  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;

const CardSlier = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Container>
      <Slider {...settings}>
        {" "}
        <Div>
          {" "}
          <h3>처</h3>{" "}
        </Div>{" "}
        <Div>
          {" "}
          <h3>음</h3>{" "}
        </Div>{" "}
        <Div>
          {" "}
          <h3>만</h3>{" "}
        </Div>{" "}
        <Div>
          {" "}
          <h3>든</h3>{" "}
        </Div>{" "}
        <Div>
          {" "}
          <h3>캐러셀</h3>{" "}
        </Div>{" "}
      </Slider>
    </Container>
  );
};

export default CardSlier;
