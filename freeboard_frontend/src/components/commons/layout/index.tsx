import { ReactChild } from "react";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const LayoutBody = styled.div`
  /* background-color: white; */
  height: 100%;
`;
const LayoutFixBox = styled.div`
  /* position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden; */
`;
const LayoutSidebar = styled.div`
  width: 300px;
  height: 1000px;
  background-color: green;
`;
const BodyWrapper = styled.div`
  background-color: #f0dcd9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HIDDEN_HEADERS = ["/notice/list"];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <LayoutFixBox>
      <Banner />
      {!isHiddenHeader && <Header />}
      <Navigation />
      <BodyWrapper>
        <LayoutSidebar />
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      <Footer />
    </LayoutFixBox>
  );
}
