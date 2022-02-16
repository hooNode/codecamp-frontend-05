import * as S from "./style";

export default function LoginPagePreseneter() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.LoginFrom>
          <S.ForIdBox>
            <p>아이디</p>
            <S.LoginFromId />
          </S.ForIdBox>
          <S.ForPasswordBox>
            <p>비밀번호</p>
            <S.LoginFromPassword />
          </S.ForPasswordBox>
        </S.LoginFrom>
        <S.LoginBtn>로그인</S.LoginBtn>
      </S.Container>
    </S.Wrapper>
  );
}
