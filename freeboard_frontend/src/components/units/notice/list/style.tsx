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
  height: 70px;
  width: 100%;
  background: white;
`;
export const TopTitle = styled.div`
  font-weight: lighter;
  font-size: 20px;
  width: 53%;
  margin-top: 30px;
`;
export const ItemListWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 15vw;
  min-width: 200px;
  min-height: 30vh;
  margin-bottom: 40px;
`;
export const ItemImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15vw;
  min-width: 200px;
  height: 20vh;

  /* min-height: 100px; */
  /* margin-bottom: 25px; */
`;
export const ItemNoneImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15vw;
  min-width: 200px;
  height: 20vh;
  background: #ededed;
  border-radius: 10px;

  /* min-height: 100px; */
  /* margin-bottom: 25px; */
`;
export const ItemImageBoxFont = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 200px;
`;
export const ItemName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
export const ItemRemarks = styled.div`
  font-weight: lighter;
  font-size: 14px;
`;
export const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #f9961e;
`;
export const FixedIcon = styled.div`
  position: fixed;
  bottom: 5%;
  right: 15%;
  cursor: pointer;
`;

export const TagItem = styled.div`
  margin: 0 5px 5px 5px;
  color: #f9961e;
  font-weight: normal;
  background: #e9e9e9;
  padding: 5px 15px;
  border-radius: 12px;
`;
