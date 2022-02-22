import * as S from "./style";

export default function SignupPagePresenter({
  onClickCreateUser,
  onChangeInputs,
}) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.SignupFrom>
          <S.ForEmailBox>
            <p>이메일</p>
            <S.SignupFromEmail name="email" onChange={onChangeInputs} />
          </S.ForEmailBox>
          <S.ForEmailBox>
            <p>닉네임</p>
            <S.SignupFromNickname name="name" onChange={onChangeInputs} />
          </S.ForEmailBox>
          <S.ForEmailBox>
            <p>비밀번호</p>
            <S.SignupFromPassword name="password" onChange={onChangeInputs} />
          </S.ForEmailBox>
          <S.ForEmailBox>
            <p>비밀번호 확인</p>
            <S.SignupFromConfirmPassword />
          </S.ForEmailBox>
        </S.SignupFrom>
        <S.SignupBtn onClick={onClickCreateUser}>회원가입</S.SignupBtn>
      </S.Container>
    </S.Wrapper>
  );
}
