import styled from "@emotion/styled";

export const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
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
  margin-top: 80px;
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
`;
export const Body_Youtube = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
export const Content_Footer = styled.div`
  display: flex;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
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
  margin-top: 70px;
`;
export const List_Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 60px 18px 60px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin: 0px 20px;
  cursor: pointer;
  &:hover {
    background-color: #ffd600;
  }
`;
export const Edit_Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 60px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin: 0px 20px;
  cursor: pointer;
  &:hover {
    background-color: #ffd600;
  }
`;
export const Delete_Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 60px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin: 0px 20px;
  cursor: pointer;
  &:hover {
    background-color: #ffd600;
  }
`;
export const Footer = styled.div`
  width: 1200px;
  height: 500px;
  margin-top: 80px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
`;
export const Footer_Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 60px;
  height: 52px;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const Footer_Tag = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;
export const Tag_Writer = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  display: flex;
  justify-content: center;
  align-items: center;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;
export const Tag_Password = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  display: flex;
  justify-content: center;
  align-items: center;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;
export const Tag_Review = styled.div`
  width: 180px;
  height: 52px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  margin-left: 10px;
`;
export const Footer_Text = styled.div`
  width: 1200px;
  height: 161px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.textarea`
  width: 1200px;
  height: 108px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  resize: none;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;
export const PossibleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextCount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25px;
  color: gray;
  height: 52px;
  width: 93%;
  border: 1px solid #bdbdbd;
  border-top: none;
`;
export const Text_Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 52px;
  background: #000000;
  color: white;
  position: relative;
  right: 0;
  bottom: 0;
  margin-right: 3px;
  cursor: pointer;
`;
export const Footer_List = styled.div``;
