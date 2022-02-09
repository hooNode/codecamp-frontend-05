import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0 100px;
  background-color: white;
`;

const WarningMsg = styled.div`
  color: #b0b0b0;
  font-size: 1.5rem;
`;
const IdTag = styled.div`
  display: flex;
  margin-top: 40px;
`;
const LoginBox = styled.div`
  margin-right: 30px;
  font-size: 1.5rem;
`;
const SignupBox = styled.div`
  font-size: 1.5rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 30rem;
  height: 100%;
`;

export default function LayoutHeader() {
  return (
    <Wrapper>
      <img src="/youTube.png" width="350px" height="300px" />

      <TextBox>
        <IdTag>
          <LoginBox>로그인</LoginBox>
          <SignupBox>회원가입</SignupBox>
        </IdTag>
        <WarningMsg>화면 크기를 조정해 주세요.</WarningMsg>
      </TextBox>
    </Wrapper>
  );
}
