import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import BoardList from "../src/components/units/board/list/BoardList.container";
import CardSlier from "../src/components/commons/layout/banner/index";

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SecondWrapper = styled.div`
  margin-top: -50px;
`;
const BlackHeader = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  height: 100px;
  z-index: 2;
  background: -webkit-linear-gradient(to top, black, rgba(0, 0, 0, 0));
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  margin-top: -160px;
`;
const ThirdWrapper = styled.div`
  z-index: 10;
  width: 100%;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SASA = styled.div`
  position: relative;
  width: 10%;
  margin-bottom: -20px;
  margin-left: 90px;
  color: white;
  font-size: 25px;
  z-index: 200;
  font-weight: bold;
`;
const TextBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default function Home() {
  return (
    <TopWrapper>
      <SecondWrapper>{/* <CardSlier /> */}</SecondWrapper>

      <Wrapper>
        <BlackHeader />

        <ThirdWrapper>
          <TextBox>
            <SASA>모든 영상</SASA>
          </TextBox>

          {/* <BoardList /> */}
        </ThirdWrapper>
      </Wrapper>
    </TopWrapper>
  );
}
