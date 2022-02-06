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
  font-size: 20px;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 30rem;
  height: 100%;
`;

export default function LayoutHeader() {
  return (
    <Wrapper>
      <img src="/youTube.png" width="350px" height="300px" />

      <TextBox>
        <WarningMsg>화면 크기를 조정해 주세요.</WarningMsg>
      </TextBox>
    </Wrapper>
  );
}
