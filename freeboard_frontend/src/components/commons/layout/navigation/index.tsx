import styled from "@emotion/styled";
import { BiSearchAlt } from "react-icons/bi";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  /* background-color: black; */
  /* border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd; */
  color: white;
  font-size: 40px;
`;
const SearchBar = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  border-radius: 15px;
  width: 60%;
  border: 1px solid #bdbdbd;
  height: 80px;
  background-color: white;
  color: #bdbdbd;
  font-size: 40px;
`;
export default function LayoutNavigation() {
  return (
    <Wrapper>
      <SearchBar placeholder="검색" />
      <BiSearchAlt style={{ fontSize: "60px", marginLeft: "15px" }} />
    </Wrapper>
  );
}
