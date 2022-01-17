import React from 'react'
import * as S from './BoardWrite.styles'

export default function BoardWriteUI({ onChangeWriter, onChangeTitle, onChangeContents, getData, allData, setIsActive, isActive }) {


    return (
        <>
            writer :<S.MyInput type="text" onChange={onChangeWriter} /><br />
            title :<S.MyInput type="text" onChange={onChangeTitle} /><br />
            contents :<S.MyInput type="text" onChange={onChangeContents} /><br />
            <S.MyBtn onClick={getData} color2={isActive} >GRAPHQQL-API 요청하기</S.MyBtn>
            <div>{allData}</div>
            <button onClick={() => setIsActive(!isActive)}>
                send data to parent
            </button>
        </>
    )
}