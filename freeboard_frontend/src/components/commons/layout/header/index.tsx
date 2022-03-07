import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillTriangleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GlobalContext } from "../../../../../pages/_app";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ isLogin }) => isLogin && "60px"};
  background-color: ${({ isLogin }) => (isLogin ? "white" : "none")};
  z-index: 100;
`;

const Writer = styled.div`
  position: fixed;
  top: 1;
  z-index: 20;
  width: 17ch;
  border-right: 0.1em solid black;
  font-family: monospace;
  font-size: 2em;
  animation: type 2.5s steps(17), writer 1s infinite alternate,
    delete 1s steps(5) 2.5s, type2 1s steps(5) 3s forwards,
    type3 3s steps(22, end) 5s forwards;
  overflow: hidden;
  white-space: nowrap;
  color: black;
  color: ${({ isTop }) => (isTop ? "black" : "white")};

  ::before {
    content: "Hello, I'm Hnnn.";
    animation: type2 1s steps(6) 3s forwards,
      type3 3s steps(17, end) 10s forwards;
  }
  @keyframes type {
    from {
      width: 0;
    }
    to {
      width: 17.2ch;
    }
  }

  @keyframes type2 {
    from {
      width: 12ch;
      content: "Hello, I'm Hoon.";
    }
    to {
      width: 17ch;
      content: "Hello, I'm Hoon. Welcome to my Website!";
    }
  }

  @keyframes type3 {
    from {
      width: 17ch;
      content: "Hello, I'm Hoon. Welcome to my Website!";
    }
    to {
      width: 39ch;
      content: "Hello, I'm Hoon. Welcome to my Website!";
    }
  }

  @keyframes writer {
    0% {
      border-color: black;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: black;
    }
  }

  @keyframes delete {
    from {
      width: 17ch;
    }
    to {
      width: 4ch;
    }
  }
  display: ${({ isLogin }) => (isLogin ? "flex" : "none")};
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  animation: ${({ isTop }) => (isTop ? "fadeout 1s" : "fadein 1s")};
  animation: ${({ isFirst }) => isFirst && "none"};
  animation-fill-mode: forwards;
  @keyframes fadeout {
    from {
      opacity: 0.9;
      background-color: #1e191a;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.9;
      background-color: #1e191a;
    }
  }
`;

const Rest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  padding: 10px 25px;
`;
const LeftTag = styled.div`
  display: flex;
  align-items: center;
`;
const ImageBox = styled.div`
  margin-right: 50px;
  cursor: pointer;
`;
const NavBox = styled.div`
  display: flex;
  color: ${({ isMarket }) => (isMarket ? "black" : "white")};
  color: ${({ isTop }) => !isTop && "white"};
  margin-top: ${({ isBoards }) => (isBoards ? "10px" : "0px")};
`;

const MenuTag = styled.div`
  color: ${({ isMarket }) => (isMarket ? "black" : "white")};
  color: ${({ isTop }) => !isTop && "white"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 50px;
  height: 20px;
  width: 50px;
  cursor: pointer;
`;
const NewMenu = styled.div`
  display: flex;
  color: ${({ isMarket }) => isMarket && "black"};
  color: ${({ isTop }) => !isTop && "white"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 250px;
  position: fixed;
  top: 60px;
  border-top: 3px solid white;
`;
const MenuIdTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  color: ${({ isMarket }) => isMarket && "black"};
  color: ${({ isTop }) => !isTop && "white"};
  width: 250px;
  height: 60px;
  background-color: black;
  border-bottom: 1px solid gray;
  opacity: 0.8;
  font-size: 0.7rem;
  font-weight: thin;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background-color: #3a3a3a;
    font-size: 0.8rem;
  }
`;
const IdTag = styled.div`
  color: ${({ isMarket }) => isMarket && "black"};
  font-size: 0.8rem;
  font-weight: thin;
  margin-right: 50px;
  cursor: pointer;
`;
const UserText = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const SearchTag = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 25px;
  margin-right: 20px;
  animation: ${({ isSearchBar }) =>
    isSearchBar ? "present 1s both" : "disappear 0.5s both"};
  @keyframes present {
    from {
      width: 10px;
      border: none;
    }
    to {
      width: 200px;
      border: "1px solid white";
    }
  }
  @keyframes disappear {
    from {
      width: 200px;
      border: "1px solid white";
    }
    to {
      width: 30px;
      border: none;
    }
  }
`;
const SearchBar = styled.input`
  width: 90%;
  margin: 0 5px;
  background-color: transparent;
  border: none;
  padding-left: 5px;
  color: white;
  color: ${({ isMarket }) => isMarket && "black"};
  color: ${({ isTop }) => !isTop && "white"};
  font-size: 12px;
  &:focus {
    outline-width: 0;
  }
  ::placeholder {
    color: white;
    color: ${({ isMarket }) => isMarket && "black"};
    color: ${({ isTop }) => !isTop && "white"};
  }
`;
const LoginBox = styled.div`
  color: ${({ isLogin }) => isLogin && "black"};
  color: ${({ isLogin }) => !isLogin && "white"};
  color: ${({ isMarket }) => isMarket && "black"};
  color: ${({ isTop }) => !isTop && "white"};
  margin-right: 30px;
  font-size: 0.7rem;
  font-weight: thin;
  cursor: pointer;
`;
const SignupBox = styled.div`
  color: ${({ isLogin }) => isLogin && "black"};
  color: ${({ isLogin }) => !isLogin && "white"};
  color: ${({ isMarket }) => isMarket && "black"};
  color: ${({ isTop }) => !isTop && "white"};
  font-size: 0.7rem;
  font-weight: thin;
  cursor: pointer;
`;

export default function LayoutHeader({ isLogin, isMarket }) {
  const { moveToPage } = useMoveToPage();
  const router = useRouter();
  const { userInfo } = useContext(GlobalContext);
  const [isFirst, setIsFirst] = useState(true);
  const [isSmall, setIsSmall] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isBoards, setIsBoards] = useState(false);

  const handleFollow = useCallback(() => {
    if (window.pageYOffset === 0) setIsTop(true);
    if (window.pageYOffset > 0) setIsTop(false);
    setIsFirst(false);
  }, [isTop]);

  let timer;
  const onMenuOver = () => {
    clearTimeout(timer);
    setIsHover(true);
  };

  const onMenuOut = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setIsHover(false);
    }, 500);
  };

  const onSearchBar = () => {
    setIsSearchBar((prev) => !prev);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, [isTop]);

  const handleResize = () => {
    if (window.innerWidth <= 1026) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1026) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmall]);

  useEffect(() => {
    if (router.asPath.includes("/boards")) {
      setIsBoards(true);
    } else {
      setIsBoards(false);
    }
  }, [router]);

  return (
    <Wrapper isLogin={isLogin} isMarket={isMarket}>
      <Writer isTop={isTop} isLogin={isLogin} isMarket={isMarket} />

      <Container isTop={isTop} isFirst={isFirst}></Container>
      <Rest>
        <LeftTag>
          <ImageBox>
            <img
              src={isBoards ? "/dang.png" : "/aqaq.png"}
              width="130px"
              height={isBoards ? "35px" : "40px"}
              onClick={moveToPage("/")}
            />
          </ImageBox>
          {isLogin ? (
            <></>
          ) : (
            <NavBox isMarket={isMarket} isTop={isTop} isBoards={isBoards}>
              {isSmall ? (
                <MenuTag
                  isMarket={isMarket}
                  isTop={isTop}
                  onMouseOver={onMenuOver}
                  onMouseOut={onMenuOut}
                >
                  <GiHamburgerMenu
                    style={{
                      color: isMarket ? (isTop ? "black" : "white") : "white",
                      width: "200px",
                      height: "200px",
                      fontSize: "100px",
                      fontWeight: "1000",
                    }}
                  />

                  <NewMenu
                    isMarket={isMarket}
                    isTop={isTop}
                    onMouseOver={onMenuOver}
                    onMouseOut={onMenuOut}
                    style={
                      isHover
                        ? {
                            display: "block",
                            color: "white",
                          }
                        : {
                            display: "none",
                            color: "white",
                          }
                    }
                  >
                    <BsFillTriangleFill
                      style={{
                        position: "absolute",
                        top: "-15px",
                        left: "47%",
                      }}
                    />
                    <MenuIdTag
                      isMarket={isMarket}
                      onClick={moveToPage("/notice/list")}
                    >
                      콘텐츠 목록
                    </MenuIdTag>
                    <MenuIdTag
                      isMarket={isMarket}
                      onClick={moveToPage("/notice/new")}
                    >
                      콘텐츠 올리기
                    </MenuIdTag>
                    <MenuIdTag
                      isMarket={isMarket}
                      onClick={moveToPage("/boards/list")}
                    >
                      상품목록
                    </MenuIdTag>
                    <MenuIdTag
                      isMarket={isMarket}
                      onClick={moveToPage("/boards/new")}
                    >
                      상품 올리기
                    </MenuIdTag>
                  </NewMenu>
                </MenuTag>
              ) : (
                <>
                  <IdTag onClick={moveToPage("/notice/list")}>
                    콘텐츠 목록
                  </IdTag>
                  <IdTag onClick={moveToPage("/notice/new")}>
                    콘텐츠 올리기
                  </IdTag>
                  <IdTag onClick={moveToPage("/boards/list")}>상품목록</IdTag>
                  <IdTag onClick={moveToPage("/boards/new")}>상품 올리기</IdTag>
                </>
              )}
            </NavBox>
          )}
        </LeftTag>

        <UserText>
          <SearchTag
            isMarket={isMarket}
            isTop={isTop}
            isSearchBar={isSearchBar}
          >
            <BiSearchAlt
              style={{
                fontSize: "20px",
                color: isMarket ? (isTop ? "black" : "white") : "white",

                marginLeft: "5px",
              }}
              onClick={onSearchBar}
            />
            {isSearchBar ? (
              <SearchBar
                isMarket={isMarket}
                isTop={isTop}
                placeholder="검색어를 입력하세요."
              />
            ) : (
              <></>
            )}
          </SearchTag>
          {userInfo.name ? (
            <>
              <SignupBox
                isLogin={isLogin}
                isTop={isTop}
                isMarket={isMarket}
                onClick={moveToPage("/accounts/login")}
              >
                {userInfo?.name}님 안녕하세요.
              </SignupBox>
            </>
          ) : (
            <>
              <LoginBox
                isLogin={isLogin}
                isTop={isTop}
                isMarket={isMarket}
                onClick={moveToPage("/accounts/login")}
              >
                로그인
              </LoginBox>
              <SignupBox
                isLogin={isLogin}
                isTop={isTop}
                isMarket={isMarket}
                onClick={moveToPage("/accounts/signup")}
              >
                회원가입
              </SignupBox>
            </>
          )}
        </UserText>
      </Rest>
    </Wrapper>
  );
}
