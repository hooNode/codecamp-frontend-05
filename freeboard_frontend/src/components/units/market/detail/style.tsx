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
  flex-direction: column;
  margin-bottom: 50px;
  min-width: 350px;
  min-height: 100vh;
  border-radius: 10px;
  padding: 20px 40px;
`;
export const TopBox = styled.div`
  height: 60px;
  width: 100%;
  background: white;
`;

export const CarouselBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export const ProfileBox = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
export const ProfileWord = styled.div`
  margin-left: 8px; ;
`;
export const ProfileName = styled.div`
  font-weight: bold;
`;
export const ProfilePlace = styled.div``;

export const ContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* margin-top: -100px; */
`;
export const ContentsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 25px;
  font-weight: 500;
`;
export const ContentsSubTitle = styled.div``;
export const ContentsTags = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const TagItem = styled.div`
  margin: 0 15px 5px 0px;
  color: #f9961e;
  font-weight: normal;
  background: #e9e9e9;
  padding: 5px 15px;
  border-radius: 12px;
`;
export const ContentsCreatedAt = styled.div`
  margin-bottom: 10px;
`;
export const ContentsPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #f9961e;
`;
export const ContentsText = styled.div``;
export const ContentsRemarks = styled.div`
  font-size: 23px;
  font-weight: 300;
  margin-bottom: 10px;
`;
export const SubRemarks = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: #f9961e;
`;
export const ContentsMain = styled.div`
  font-size: 25px;
  font-weight: 250;
`;
export const ContentsLikeCount = styled.div``;

export const CommentsBox = styled.div``;
