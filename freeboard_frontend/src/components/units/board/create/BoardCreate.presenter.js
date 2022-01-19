import * as S from './BoardCreate.styles';
import React from 'react'


export default function presenterBoard({
    msg1, msg2, msg3, msg4,
    word1, word2, word3, word4,
    checkWording1, checkWording2, checkWording3, checkWording4,
    btnClick, allData, modaltime, onBtn,
    isEdit, btnEdit

}) {
    return (
        <>
            <S.Form>
                <S.Title>
                    <span>게시물 {isEdit ? "수정" : "등록"}</span>
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
                    <S.Btn type="submit" onClick={isEdit ? btnEdit : btnClick} onBtn={onBtn}>
                        {isEdit ? "수정하기" : "등록하기"}
                    </S.Btn>
                </S.Content>
                {modaltime ? <S.Modal>{allData}</S.Modal> : <div></div>}
            </S.Form >
        </>


    )
}