import { ReactChild, useEffect, useRef, useState } from "react";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const LayoutBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  margin-top: 40px;
  /* background-color: red; */
  margin-right: 3rem;
`;

const LayoutFixBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;
const SideWrapper = styled.div`
  height: 100vh;
`;
const LayoutSidebar = styled.div`
  width: 23rem;
  height: 70vh;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  align-items: flex-start;
  margin-top: 40px;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: #f2f2f2;
`;

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  const HIDDEN_HEADERS = [
    "/notice/list",
    "/notice/new",
    `/notice/${router.query.aaa}/edit`,
  ];

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <LayoutFixBox>
      <Header />
      <Banner />
      <Navigation />
      <BodyWrapper>
        <LayoutBody>{props.children}</LayoutBody>
        <SideWrapper>{!isHiddenHeader && <LayoutSidebar />}</SideWrapper>
      </BodyWrapper>
    </LayoutFixBox>
  );
}
