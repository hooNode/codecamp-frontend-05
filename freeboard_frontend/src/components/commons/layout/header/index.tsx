import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ isLogin }) => (isLogin ? "flex-end" : "center")};
  width: 100%;
  height: ${({ isLogin }) => (isLogin ? "70px" : "500px")};
  background: ${({ isWord }) => (isWord ? "#1e191a" : "white")};
  padding-bottom: 13px;
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
  color: ${({ isWord }) => (isWord ? "white" : "black")};
  color: ${({ isTop }) => !isTop && "white"};
  cursor: pointer;
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
  height: 70px;
  background-color: none;
  position: fixed;
  top: 0;
  animation: ${({ isTop }) => (isTop ? "fadeout 1s" : "fadein 1s")};
  animation: ${({ isFirst }) => isFirst && "none"};

  animation-fill-mode: forwards;
  @keyframes fadeout {
    from {
      opacity: 1;
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
      opacity: 1;
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
`;
const NavBox = styled.div`
  display: flex;
`;

const MenuTag = styled.div`
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 50px;
  cursor: pointer;
`;
const IdTag = styled.div`
  color: white;
  font-size: 0.8rem;
  font-weight: thin;
  margin-right: 50px;
  cursor: pointer;
`;
const UserText = styled.div`
  display: flex;
  margin-right: 20px;
`;
const LoginBox = styled.div`
  color: ${({ isWord }) => (isWord ? "white" : "black")};
  color: ${({ isTop }) => !isTop && "white"};
  margin-right: 30px;
  font-size: 0.7rem;
  font-weight: thin;
  cursor: pointer;
`;
const SignupBox = styled.div`
  color: ${({ isWord }) => (isWord ? "white" : "black")};
  color: ${({ isTop }) => !isTop && "white"};
  font-size: 0.7rem;
  font-weight: thin;
  cursor: pointer;
`;

export default function LayoutHeader({ isLogin }) {
  const router = useRouter();
  const [isFirst, setIsFirst] = useState(true);
  const [isSmall, setIsSmall] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isWord, setIsWord] = useState(false);
  const moveToMain = () => {
    router.push("/");
  };
  const moveToLogin = () => {
    router.push("/boards/login");
  };
  const moveToSignup = () => {
    router.push("/boards/signup");
  };

  const changeWord = () => {
    setIsWord((prev) => !prev);
  };
  const handleFollow = useCallback(() => {
    if (window.pageYOffset === 0) setIsTop(true);
    if (window.pageYOffset > 0) setIsTop(false);
    setIsFirst(false);
  }, [isTop]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const handleResize = () => {
    if (window.innerWidth <= 772) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 772) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Wrapper isLogin={isLogin} isWord={isWord}>
      <Writer
        isTop={isTop}
        isLogin={isLogin}
        isWord={isWord}
        onClick={changeWord}
      />
      <Container isTop={isTop} isFirst={isFirst}></Container>
      <Rest>
        <LeftTag>
          <ImageBox>
            <img
              src="/aqaq.png"
              width="130px"
              height="50px"
              onClick={moveToMain}
            />
          </ImageBox>
          {isLogin ? (
            <></>
          ) : (
            <NavBox>
              {isSmall ? (
                <MenuTag>메뉴</MenuTag>
              ) : (
                <>
                  <IdTag onClick={moveToMain}>홈</IdTag>
                  <IdTag>콘텐츠 올리기</IdTag>
                  <IdTag>상품 올리기</IdTag>
                  <IdTag>내가 찜한 콘텐츠</IdTag>
                </>
              )}
            </NavBox>
          )}
        </LeftTag>

        <UserText>
          <LoginBox isTop={isTop} isWord={isWord} onClick={moveToLogin}>
            로그인
          </LoginBox>
          <SignupBox isTop={isTop} isWord={isWord} onClick={moveToSignup}>
            회원가입
          </SignupBox>
        </UserText>
      </Rest>
    </Wrapper>
  );
}
