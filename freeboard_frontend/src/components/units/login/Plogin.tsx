import * as S from "./style";

export default function LoginPagePreseneter({
  onChangeInputs,
  onClickLoginUser,
}) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.LoginFrom>
          <S.ForIdBox>
            <p>이메일</p>
            <S.LoginFromId name="email" onChange={onChangeInputs} />
          </S.ForIdBox>
          <S.ForPasswordBox>
            <p>비밀번호</p>
            <S.LoginFromPassword name="password" onChange={onChangeInputs} />
          </S.ForPasswordBox>
        </S.LoginFrom>
        <S.LoginBtn onClick={onClickLoginUser}>로그인</S.LoginBtn>
      </S.Container>
    </S.Wrapper>
  );
}
