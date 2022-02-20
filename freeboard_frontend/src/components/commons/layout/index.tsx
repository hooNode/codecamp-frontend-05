import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { createContext, ReactChild, useState } from "react";
import Header from "./header";

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
  width: ${({ isList }) => (isList ? "100%" : "auto")};
`;

const SideWrapper = styled.div`
  height: 70vh;
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
  background-color: #1e191a;
`;

interface ILayoutProps {
  children: ReactChild;
}
export const GlobalContext = createContext({});
export default function Layout(props: ILayoutProps) {
  const [bestYoutube, setBestYoutube] = useState([]);
  const value = {
    bestYoutube,
    setBestYoutube,
  };
  const router = useRouter();
  const isLogin = true;
  const HIDDEN_HEADERS = [
    "/notice/list",
    "/notice/new",
    `/notice/${router.query.aaa}/edit`,
    "/boards/signup",
    "/boards/login",
  ];
  const HIDDEN_REST = ["/boards/login", "/boards/signup"];
  const HIDDEN_SIDEBAR = [`/notice/${router.query.aaa}`];

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenRest = HIDDEN_REST.includes(router.asPath);

  return (
    <LayoutFixBox>
      <GlobalContext.Provider value={value}>
        {isHiddenRest ? <Header isLogin={isLogin} /> : <Header />}
      </GlobalContext.Provider>
      <BodyWrapper>
        <GlobalContext.Provider value={value}>
          <LayoutBody isList={isHiddenHeader}>{props.children}</LayoutBody>
        </GlobalContext.Provider>
        <SideWrapper>{isHiddenSidebar && <LayoutSidebar />}</SideWrapper>
      </BodyWrapper>
    </LayoutFixBox>
  );
}
