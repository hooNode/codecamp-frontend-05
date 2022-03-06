import styled from "@emotion/styled";

export const Fragment = styled.div`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  width: 60vw;

  min-width: 350px;
  border-radius: 10px;
  padding: 0px 30px;
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  margin: 10px 0 20px 0;
  padding: 15px;
  border-top: 1px solid #e6e6e6;
`;
export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
`;
export const CreatedDay = styled.div`
  color: #bdbdbd;
  font-size: 14px;
`;
export const ImageIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60px;
`;
export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  &:hover {
    background: #f9961e;
    color: white;
  }
`;
export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  margin-right: 10px;
  &:hover {
    background: #f9961e;
    color: white;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 35%;
  left: 0%;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  /* height: 100vh; */
`;
export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
export const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;
export const WriterName = styled.div`
  font-weight: 700;
`;
export const StarBox = styled.div`
  margin-left: 30px;
  width: 100px;
`;
export const ThirdLine = styled.div``;
export const EditThirdLine = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 15px;
    margin: 0 0 0 15px;
  }
`;
export const ContentsText = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const EditPassword = styled.input`
  height: 30px;
  width: 10%;
  background: none;
  border: none;
  border-radius: 0px;
  resize: none;
  border-bottom: 0.1rem solid #e6e6e6;
  padding: 0 0 0 10px;
  margin-left: 20px;
  &:focus {
    outline: none;
    border-bottom: 0.5px solid black;
  }
`;
export const EditTextBox = styled.textarea`
  height: 2rem;
  width: 50%;
  background: none;
  border: none;
  border-radius: 0px;
  resize: none;
  border-bottom: 0.1rem solid #e6e6e6;
  padding: 0 0 0 10px;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  &:focus {
    outline: none;
    border-bottom: 0.5px solid black;
  }
`;

export const ConfirmBtn = styled.button`
  border: 1px solid #e6e6e6;
  color: #bdbdbd;
  font-size: 14px;
  margin: 0;
  padding: 0 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background: #f9961e;
    color: white;
  }
`;
export const IsEditBtn = styled.div`
  display: flex;
  margin-right: -6px;
`;
export const AnswerBtn = styled.button`
  width: 10%;
  font-size: 14px;
  font-weight: 300;
  border: none;
  margin-top: 10px;
  &:hover {
    background: #f9961e;
    color: white;
  }
`;
export const AnswerInput = styled.input`
  font-size: 14px;
  font-weight: 300;
  border: none;
  border-bottom: 0.1rem solid #e6e6e6;
  margin-top: 10px;
  &:focus {
    outline: none;
    border-bottom: 0.5px solid black;
  }
`;
