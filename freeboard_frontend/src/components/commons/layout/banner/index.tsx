import styled from "@emotion/styled";
import { useCallback, useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { GlobalContext } from "../../layout/index";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";

const Container = styled.div`
  .slick-slider {
    height: 100%;
    width: 100vw;
    background: #000000; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top,
      #1e191a,
      #000000
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top,
      #1e191a,
      #000000
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .slick-list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-track {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .slick-arrow {
      display: none;
    }
    .slick-next {
      display: none;
    }
  }
  .slick-cloned {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Player = styled(ReactPlayer)``;

const SubContainer = styled.div`
  height: 100%;
`;

const Div = styled.div`
  height: 100%;
  width: 100%;
`;

export const CardSlier = () => {
  const router = useRouter();
  const { bestYoutube } = useContext(GlobalContext);
  const [bestArr, setBestArr] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  const pushClick = (e) => {
    router.push("/notice/" + e.currentTarget.id);
  };
  let timer;
  const getBest = useCallback(() => {
    bestYoutube.sort((a, b) => b.likeCount - a.likeCount).slice(0, 5);
    clearTimeout(timer);
  }, [bestYoutube]);

  useEffect(() => {
    clearTimeout(timer);
    getBest();
    timer = setTimeout(() => {
      setBestArr(bestYoutube);
    }, 1000);
  }, [bestArr]);

  return (
    <Container>
      <SubContainer>
        <Slider {...settings}>
          {" "}
          <Div>
            <Player
              style={{
                zIndex: "10",
              }}
              height="100vh"
              width="100vw"
              url={bestArr[0]?.youtubeUrl}
              light={true}
              id={bestArr[0]?._id}
              onClick={pushClick}
            />
          </Div>{" "}
          <Div>
            <Player
              style={{
                zIndex: "10",
              }}
              height="100vh"
              width="100vw"
              url={bestArr[1]?.youtubeUrl}
              light={true}
              id={bestArr[1]?._id}
              onClick={pushClick}
            />
          </Div>{" "}
          <Div>
            <Player
              style={{
                zIndex: "10",
              }}
              height="100vh"
              width="100vw"
              url={bestArr[2]?.youtubeUrl}
              light={true}
              id={bestArr[2]?._id}
              onClick={pushClick}
            />
          </Div>{" "}
          <Div>
            <>
              <Player
                style={{
                  zIndex: "10",
                }}
                height="100vh"
                width="100vw"
                url={bestArr[3]?.youtubeUrl}
                light={true}
                id={bestArr[3]?._id}
                onClick={pushClick}
              />
            </>
          </Div>{" "}
          <Div>
            <>
              <ReactPlayer
                style={{
                  zIndex: "10",
                }}
                height="100vh"
                width="100vw"
                url={bestArr[4]?.youtubeUrl}
                light={true}
                id={bestArr[4]?._id}
                onClick={pushClick}
              />
            </>
          </Div>
        </Slider>
      </SubContainer>
    </Container>
  );
};

export default CardSlier;
