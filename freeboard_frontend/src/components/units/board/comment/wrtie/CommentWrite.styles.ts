import styled from "@emotion/styled";

export const Footer = styled.div`
  width: 1200px;
  font-size: 20px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
`;
export const Footer_Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 52px;
  margin-top: 40px;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
  line-height: 27px;
`;
export const Footer_Tag = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
export const Tag_Writer = styled.input`
  width: 180px;
  height: 52px;
  border: none;
  font-size: 20px;
  border-bottom: 1px solid #bdbdbd;
  background: none;
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
  border: none;
  border-bottom: 1px solid #bdbdbd;
  background: none;
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
  background: none;
  font-size: 20px;
  padding-left: 10px;
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
  border: none;
  border-top: 1px solid #bdbdbd;
`;
export const Text_Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background: #f2f2f2;
  color: black;
  position: relative;
  right: 0;
  bottom: 0;
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;
export const Footer_List = styled.div``;
