import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px;
  box-sizing: border-box;
  padding-top: 100px;
`;
export const TableTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: -webkit-fill-available;
  height: 45px;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardTable = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 1200px;
  height: 485px;
`;
interface Iid {
  id: number;
}
export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px 0px 20px;
  border-bottom: ${({ id }: Iid) => (id === 9 ? "" : "1px solid #BDBDBD")};
  display: flex;
  padding: 0px;
  height: 44px;
`;

export const ColumnCheck = styled.div`
  display: flex;
  width: -webkit-fill-available;
  padding-left: 25px;
  margin: 10px 0px;
`;
export const ColumnIndex = styled.div`
  display: flex;
  width: -webkit-fill-available;
  margin: 10px 0px;
`;
export const ColumnTitle = styled.div`
  width: -webkit-fill-available;
  margin: 10px 0px;
`;
export const ColumnWriter = styled.div`
  width: -webkit-fill-available;
  margin: 10px 0px;
`;
export const ColumnContent = styled.div`
  width: -webkit-fill-available;
  margin: 10px 0px;
  overflow: hidden;
  text-overflow: clip;
  padding-right: 20px;
`;
export const ColumnContents = styled.div`
  width: -webkit-fill-available;
  margin: 10px 0px;
  overflow: hidden;
  text-overflow: clip;
  padding-right: 20px;
  cursor: pointer;
`;
export const ColumnCreate = styled.div`
  width: -webkit-fill-available;
  margin: 10px 0px;
  overflow: hidden;
  text-overflow: clip;
  padding-right: 20px;
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
