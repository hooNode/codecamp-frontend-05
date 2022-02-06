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
    font-size: 60px;
  }
`;

const Container = styled.div`
  width: 50%;
  height: 20rem;
  background-color: white;
  width: 100%;
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

const SubContainer = styled.div`
  position: relative;
  left: 25%;
  width: 50%;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
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
      <SubContainer>
        <TextBox>베스트 동영상</TextBox>
        <Slider {...settings}>
          {" "}
          <Div>
            {" "}
            <h3>유</h3>{" "}
          </Div>{" "}
          <Div>
            {" "}
            <h3>튜</h3>{" "}
          </Div>{" "}
          <Div>
            {" "}
            <h3>브</h3>{" "}
          </Div>{" "}
          <Div>
            {" "}
            <h3>영</h3>{" "}
          </Div>{" "}
          <Div>
            {" "}
            <h3>상</h3>{" "}
          </Div>{" "}
        </Slider>
      </SubContainer>
    </Container>
  );
};

export default CardSlier;
