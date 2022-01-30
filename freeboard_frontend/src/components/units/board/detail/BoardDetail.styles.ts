import styled from "@emotion/styled";

export const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;

  box-sizing: border-box;
  padding-bottom: 50px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  padding: 80px 102px;
`;

export const Content = styled.div`
  width: 100%;
`;
export const Content_Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;
export const Profile = styled.div`
  display: flex;
`;

export const Sub_Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  & > span {
    font-size: 30px;
  }

  & > p {
    font-size: 20px;
    color: #828282;
    margin-top: 0px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content_Body = styled.div`
  margin-top: 20px;
`;
export const Body_Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
export const Body_Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 996px;
  height: 480px;
`;
export const Body_Text = styled.div`
  margin-top: 40px;
  width: 996px;
  height: 120px;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
`;
export const WriterText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
export const ContentsText = styled.div`
  color: #bdbdbd;
  height: 100%;
  overflow: scroll;
`;
export const Body_Youtube = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;
export const Content_Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Like_Btn = styled.div`
  display: flex;
  height: 60px;
  font-size: 18px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
`;
export const Dislike_Btn = styled.div`
  display: flex;
  height: 60px;
  font-size: 18px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
`;
export const List_Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px 5px 20px;
  background: #ffffff;
  border: 2px solid #bdbdbd;
  border-radius: 10px;
  margin: 0px 10px;
  font-weight: thin;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #b0b0b0;
  }
`;
export const Edit_Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px 5px 20px;
  background: #ffffff;
  border: 2px solid #bdbdbd;
  border-radius: 10px;
  margin: 0px 10px;
  font-weight: thin;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #b0b0b0;
  }
`;
export const Delete_Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px 5px 20px;
  background: #ffffff;
  border: 2px solid #bdbdbd;
  border-radius: 10px;
  margin: 0px 10px;
  font-weight: thin;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #b0b0b0;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToFixBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;
