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
import { AiOutlineInfoCircle } from "react-icons/ai";

const Container = styled.div`
  margin-top: -40px;
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

const TextBox = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;
  position: relative;
  top: 450px;
  left: 100px;
  width: 300px;
`;
const LinkBox = styled.div`
  display: flex;
  z-index: 20;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 18px;
  font-weight: lighter;
  background-color: gray;
  min-width: 120px;
  width: 120px;
  margin-top: 10px;
  cursor: pointer;
`;
export const CardSlier = () => {
  const router = useRouter();
  const { bestYoutube } = useContext(GlobalContext);
  const [bestArr, setBestArr] = useState([]);
  const [randomNum, setRandomNum] = useState(
    Math.ceil((Math.random() * 10) / 2)
  );

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

  const onClickLink = (id) => () => {
    router.push(`/notice/${id}`);
  };

  useEffect(() => {
    clearTimeout(timer);
    getBest();
    timer = setTimeout(() => {
      setBestArr(bestYoutube);
    }, 2000);
  }, [bestArr]);

  return (
    <Container>
      <SubContainer>
        <Div>
          <TextBox>
            인기 있는 콘텐츠 {randomNum}순위
            <LinkBox onClick={onClickLink(bestArr[randomNum - 1]?._id)}>
              <AiOutlineInfoCircle />
              &nbsp; 상세정보
            </LinkBox>
          </TextBox>
          <ReactPlayer
            style={{
              zIndex: "10",
            }}
            height="100vh"
            width="100vw"
            url={bestArr[randomNum - 1]?.youtubeUrl}
            id={bestArr[randomNum - 1]?._id}
            playing={true}
            muted={true}
            onClick={pushClick}
          />
        </Div>
        {/* <Slider {...settings}>
          {" "}
          <Div>
            <Player
              style={{
                zIndex: "10",
              }}
              height="100vh"
              width="100vw"
              url={bestArr[0]?.youtubeUrl}
              id={bestArr[0]?._id}
              playing={true}
              muted={true}
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
              id={bestArr[1]?._id}
              playing={true}
              muted={true}
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
              id={bestArr[2]?._id}
              playing={true}
              muted={true}
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
                id={bestArr[3]?._id}
                playing={true}
                muted={true}
                onClick={pushClick}
              />
            </>
          </Div>{" "}
          <Div>
            <ReactPlayer
              style={{
                zIndex: "10",
              }}
              height="100vh"
              width="100vw"
              url={bestArr[4]?.youtubeUrl}
              id={bestArr[4]?._id}
              playing={true}
              muted={true}
              onClick={pushClick}
            />
          </Div>
        </Slider> */}
      </SubContainer>
    </Container>
  );
};

export default CardSlier;
