import styled from '@emotion/styled';

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
export const Form = styled.div`
  width: 1200px;
  height: 1847px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  margin: 14px 0px;
`;

export const User = styled.div`
  width: 996px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 55px 0px;
`;

export const Id = styled.div`
  width: 486px;
  display: flex;
  height: 150px;
  flex-direction: column;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 14px;
  margin-bottom: 10px;
`;
export const Password = styled.div`
  width: 486px;
  height: 150px;
  display: flex;
  flex-direction: column;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 14px 0px;
`;

export const ID_Input = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin: 14px 0px;
`;
export const Password_Input = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin: 14px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Content_Title = styled.div`
  width: 996px;
  height: 130px;
  display: flex;
  flex-direction: column;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 0px 20px 0px;

  & > span {
    margin-top: 20px;
  }
`;
export const Title_Input = styled.input`
  width: 996px;
  height: 100px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const Content_Story = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  & > span {
    margin-top: 20px;
  }
`;
export const Story_Input = styled.textarea`
  display: flex;
  padding-bottom: 440px;
  padding-left: 10px;
  padding-top: 10px;
  width: 996px;
  height: 480px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 18px;
  margin-bottom: 18px;
`;
export const Content_Address = styled.div`
  display: flex;
  width: 996px;
  margin-top: 18px;
  flex-direction: column;
  align-items: flex-start;
  & > span {
    margin-top: 20px;
  }
`;

export const Address_one = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 18px;
`;
export const Address_Input1 = styled.input`
  width: 996px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 18px;
`;
export const Address_Input2 = styled.input`
  width: 996px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 18px;
`;

export const Address_Input = styled.input`
  width: 77px;
  height: 52px;
  padding: 17px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;
export const Address_Button = styled.button`
  width: 124px;
  height: 52px;
  background: #000000;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 16px;
`;

export const Content_Youtube = styled.div`
  display: flex;
  flex-direction: column;
  width: 996px;
  margin-top: 20px;
`;
export const Youtue_Input = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 10px;
  background: #ffffff;
  margin-top: 18px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;
export const Picture_Div = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
`;

export const Content_Picture = styled.div`
  margin-top: 18px;
  display: flex;
  width: 996px;
  flex-direction: column;
`;

export const Picture_img1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  background: #bdbdbd;
`;
export const Picture_img2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  background: #bdbdbd;
`;
export const Picture_img3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  background: #bdbdbd;
`;

export const Content_Radio = styled.div`
  width: 996px;
  margin-top: 18px;
`;
export const Radio_Title = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
`;

export const Input_Radio = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
  height: 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  font-size: 18px;
  text-align: center;
  & input {
    width: 16px;
    height: 16px;
    border: 4px solid black;
    margin-right: 5px;

    &:checked {
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
      width: 16px;
      height: 16px;
      border: 1px solid #ffd600;
      border-radius: 100%;
      background: white;
      margin-right: 5px;
    }
  }
`;
export const Radio_Btn1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Radio_Btn2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
interface IonBtn {
  onBtn: boolean;
}

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 179px;
  height: 52px;
  margin-top: 18px;
  background-color: ${({ onBtn }: IonBtn) => (onBtn ? '#D8D8D8' : '#FFD600')};
  border: none;
`;

export const ConfirmMsg = styled.div`
  color: red;
  height: 0px;
`;
export const Modal = styled.div`
  width: 700px;
  height: 300px;
  background-color: rgba(117, 190, 218, 0.5);
  border: 1px solid black;
  border-radius: 15px;
  position: fixed;
  transform: translate(0%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
