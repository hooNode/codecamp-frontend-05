import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 10px;
`;

export const BoardTable = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 30px;
  height: 40rem;
  width: 50rem;
  z-index: 10;
  /* background: blue; */
`;
export const Body_Youtube = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 28rem;
  position: relative;
  filter: contrast(80%);
  cursor: pointer;
  transition-property: width, height;
  transition-duration: 0.5s;
  width: 100%;
  height: 28rem;
  &:hover {
    filter: none;
    transition-property: width, height;
    transition-duration: 0.5s;
    width: 110%;
    height: 30rem;
    z-index: 1000;
  }
`;

export const BodyTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
`;
export const SubYoutubeLeft = styled.div`
  margin: 10px 30px 0 10px;
`;
export const SubYoutubeRight = styled.div``;

export const ColumnTitle = styled.div`
  width: -webkit-fill-available;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: -10px;
`;
export const ColumnWriter = styled.div`
  width: -webkit-fill-available;
  font-size: 30px;
  font-weight: normal;
`;
export const ColumnContent = styled.div`
  width: -webkit-fill-available;
  font-size: 25px;
  font-weight: normal;
  color: "gray";
  overflow: hidden;
  text-overflow: clip;
`;
export const ColumnCreate = styled.div`
  width: -webkit-fill-available;
  overflow: hidden;
  text-overflow: clip;
`;
export const ColumnBtn = styled.div`
  width: -webkit-fill-available;
  margin: 10px 0px;
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 60px;
    border: none;
    cursor: pointer;
  }
`;
export const LoadingBox = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AllBtn = styled.div`
  width: -webkit-fill-available;
  /* position: absolute;
    bottom: 40.7%; */
  margin: 10px 0px;
  margin-left: 1037px;
  & > button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 60px;
    border: none;
    cursor: pointer;
  }
`;
export const CreateBtn = styled.div`
  width: -webkit-fill-available;
  /* position: absolute;
    bottom: 40.7%; */
  margin: 10px 0px;
  margin-left: 1120px;
  & > button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 60px;
    border: none;
    cursor: pointer;
  }
`;
