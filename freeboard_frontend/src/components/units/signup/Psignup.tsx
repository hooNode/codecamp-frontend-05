import * as S from "./style";

export default function SignupPagePresenter() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.SignupFrom>
          <S.ForEmailBox>
            <p>이메일</p>
            <S.SignupFromEmail />
          </S.ForEmailBox>
          <S.ForEmailBox>
            <p>닉네임</p>
            <S.SignupFromNickname />
          </S.ForEmailBox>
          <S.ForEmailBox>
            <p>아이디</p>
            <S.SignupFromId />
          </S.ForEmailBox>
          <S.ForEmailBox>
            <p>비밀번호</p>
            <S.SignupFromPassword />
          </S.ForEmailBox>
          <S.ForEmailBox>
            <p>비밀번호 확인</p>
            <S.SignupFromConfirmPassword />
          </S.ForEmailBox>
        </S.SignupFrom>
        <S.SignupBtn>회원가입</S.SignupBtn>
      </S.Container>
    </S.Wrapper>
  );
}
