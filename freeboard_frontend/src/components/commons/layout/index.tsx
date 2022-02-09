import { ReactChild, useEffect, useRef, useState } from "react";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const LayoutFixBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LayoutBody = styled.div`
  display: flex;
  align-items: ${({ isList }) => (isList ? "center" : "flex-start")};
  justify-content: ${({ isList }) => (isList ? "center" : "flex-start")};
  margin-top: 40px;
  margin-right: ${({ isList }) => (isList ? "0rem" : "3rem")};
  width: ${({ isList }) => (isList ? "100%" : "auto")};
`;

const SideWrapper = styled.div`
  /* height: 70vh; */
`;
const LayoutSidebar = styled.div`
  width: 23rem;
  height: 50vh;
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
  background-color: #f2f2f2;
  padding-bottom: 100px;
`;

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
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
        <LayoutBody isList={isHiddenHeader}>{props.children}</LayoutBody>
        <SideWrapper>{!isHiddenHeader && <LayoutSidebar />}</SideWrapper>
      </BodyWrapper>
    </LayoutFixBox>
  );
}
