import * as S from '../../styles/notice_board.js';
import { useState } from 'react';

export default function notice() {
  const [msg1, setMsg1] = useState(false);
  const [msg2, setMsg2] = useState(false);
  const [msg3, setMsg3] = useState(false);
  const [msg4, setMsg4] = useState(false);
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [word4, setWord4] = useState('');



  const checkWording1 = (e) => {
    setWord1(e.target.value);
    console.log(e.target.value)
    if (e.target.value === "") {
      setMsg1(true);
    } else {
      setMsg1(false);
    }
  }
  const checkWording2 = (e) => {
    setWord2(e.target.value);
    if (e.target.value === "") {
      setMsg2(true);
    } else {
      setMsg2(false);
    }
  }
  const checkWording3 = (e) => {
    setWord3(e.target.value);
    if (e.target.value === "") {
      setMsg3(true);
    } else {
      setMsg3(false);
    }
  }
  const checkWording4 = (e) => {
    setWord4(e.target.value);
    if (e.target.value === "") {
      setMsg4(true);
    } else {
      setMsg4(false);
    }
  }

  const btnClick = () => {
    if (word1 === '') {
      setMsg1(true);
    }
    if (word2 === '') {
      setMsg2(true);
    }
    if (word3 === '') {
      setMsg3(true);
    }
    if (word4 === '') {
      setMsg4(true);
    }
  }

  return (
    <S.Form>
      <S.Title>
        <span>게시물 등록</span>
      </S.Title>
      <S.User>
        <S.Id>
          <span>작성자</span>
          <S.ID_Input type="text" placeholder="이름을 입력해주세요." onChange={checkWording1} />
          {
            msg1 ? <S.ConfirmMsg>작성자를 다시 확인해 주세요.</S.ConfirmMsg> : <div></div>
          }
        </S.Id>
        <S.Password>
          <span>비밀번호</span>
          <S.Password_Input type="password" placeholder="비밀번호을 입력해주세요." onChange={checkWording2} />
          {
            msg2 ? <S.ConfirmMsg>비밀번호를 다시 확인해 주세요.</S.ConfirmMsg> : <div></div>
          }
        </S.Password>
      </S.User>
      <S.Content>
        <S.Content_Title>
          <span>제목</span>
          <S.Title_Input type="text" placeholder='제목을 입력해주세요.' onChange={checkWording3} />
          {
            msg3 ? <S.ConfirmMsg>제목을 다시 확인해 주세요.</S.ConfirmMsg> : <div></div>
          }
        </S.Content_Title>
        <S.Content_Story>
          <span>내용</span>
          <S.Story_Input type="textarea" placeholder="내용을 입력해주세요." onChange={checkWording4} />
          {
            msg4 ? <S.ConfirmMsg>내용을 다시 확인해 주세요.</S.ConfirmMsg> : <div></div>
          }
        </S.Content_Story>
        <S.Content_Address>
          <span>주소</span>
          <S.Address_one>
            <S.Address_Input type="text" placeholder="04358" />
            <S.Address_Button>우편번호 검색</S.Address_Button>
          </S.Address_one>
          <S.Address_Input1 type="text" />
          <S.Address_Input2 type="text" />
        </S.Content_Address>
        <S.Content_Youtube>
          <span>유튜브</span>
          <S.Youtue_Input type="text" placeholder="링크를 복사해주세요." />
        </S.Content_Youtube>
        <S.Content_Picture>
          <span>사진첨부</span>
          <S.Picture_Div>
            <S.Picture_img1>
              <div>+</div>
              <span>Upload</span>
            </S.Picture_img1>
            <S.Picture_img2>
              <div>+</div>
              <span>Upload</span>
            </S.Picture_img2>
            <S.Picture_img3>
              <div>+</div>
              <span>Upload</span>
            </S.Picture_img3>
          </S.Picture_Div>
        </S.Content_Picture>
        <S.Content_Radio>
          <S.Radio_Title>
            <span>메인 설정</span>
          </S.Radio_Title>
          <S.Input_Radio>
            <S.Radio_Btn1><input type="radio" name="radio"></input><span>유튜브</span></S.Radio_Btn1>
            <S.Radio_Btn2><input type="radio" name="radio"></input><span>사진</span></S.Radio_Btn2>
          </S.Input_Radio>
        </S.Content_Radio>
        <S.Btn type="submit" onClick={btnClick}>
          등록하기
        </S.Btn>
      </S.Content>

    </S.Form >

  )
}
