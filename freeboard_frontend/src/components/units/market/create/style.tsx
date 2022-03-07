import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #f7f7f7;
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
  justify-content: space-around;
  align-items: flex-start;
  background: white;
  flex-wrap: wrap;
  margin-bottom: 50px;
  width: 55%;
  min-width: 350px;
  min-height: 100vh;
  border-radius: 10px;
  margin-top: 30px;
  border: 1px solid #bdbdbd;
  padding: 30px 40px;
`;
export const TopBox = styled.div`
  height: 60px;
  width: 100%;
  background: white;
`;
export const TopTitle = styled.div`
  font-weight: lighter;
  font-size: 20px;
  width: 53%;
  margin-top: 30px;
`;
export const Title = styled.div``;
export const Label = styled.div`
  margin: 10px 0;
`;
export const ItemContainer = styled.div`
  width: 100%;
`;
export const ItmeTitle = styled.div`
  margin: 20px 0;
`;
export const ItemInput = styled.input``;
export const ItmeSubTitle = styled.div``;
export const AdressForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
`;

export const AdressLeft = styled.div`
  width: 100%;
  height: 100%;
`;
export const AddressImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #bdbdbd;
  width: 100%;
  height: 14rem;
`;
export const AdressRight = styled.div`
  width: 60%;
  min-width: 205px;
  display: flex;
  flex-direction: column;
`;
export const FindAdress = styled.button`
  width: 78px;
`;
export const AdressInput1 = styled.div`
  margin: 15px 0 0 0;
  padding-left: 10px;
  width: 100%;
  height: 25px;
  border: 1px solid black;
  min-width: 280px;
  overflow: scroll;
`;
export const AdressModalInput = styled.input`
  display: flex;
  flex-direction: column;
`;
export const AdressInput2 = styled.input`
  margin: 15px 0 0 0;
  padding-left: 10px;
  min-width: 280px;
  border: 1px solid black;
  overflow: scroll;
`;
export const AdressFirst = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AdressNum = styled.div`
  display: flex;
  justify-content: center;
  width: 73%;
  margin-left: 20px;
  height: 25px;
  min-width: 150px;
  border: 1px solid black;
`;
export const PicturImg = styled.div`
  height: 78px;
  width: 78px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #bdbdbd;
`;
export const BtnBox = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const PictureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const PictureDiv = styled.div`
  display: flex;
  margin-right: 15px;
`;
export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0;
`;

export const TagInput = styled.input`
  height: 35px;
  padding-left: 5px;
  margin-left: 5px;
  border: none;
  :focus {
    outline: none;
    border: none;
  }
`;
export const TagItem = styled.div`
  margin: 0 5px 5px 5px;
  color: #f9961e;
  font-weight: normal;
  background: #e9e9e9;
  padding: 5px 15px;
  border-radius: 12px;
`;
export const CreateBtn = styled.button``;
