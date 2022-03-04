import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: white;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  width: 60vw;
  margin-bottom: 50px;
  min-width: 350px;
  min-height: 100vh;
  border-radius: 10px;
  padding: 0px 30px;
`;

export const Footer_Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 500;
  font-size: 23px;
`;

export const Footer_Text = styled.div`
  width: 100%;
  height: 161px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.textarea`
  width: 100%;
  height: 108px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  resize: none;
  background: none;
  font-size: 18px;
  padding-left: 10px;
  font-weight: 300;
  /* min-width: 350px; */
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
  }
`;
export const PossibleArea = styled.div`
  width: 100%;
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
  width: 70px;
  justify-content: center;
  align-items: center;
  height: 52px;
  border: 1px solid #bdbdbd;
  background: #f2f2f2;
  color: black;
  position: relative;
  right: 0;
  bottom: 0;

  cursor: pointer;
  &:hover {
    background: #f9961e;
    color: white;
  }
`;
export const Footer_List = styled.div``;
