import React from 'react'
import * as S from './BoardWrite.styles'

export default function BoardWriteUI({
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    getData,
    allData,
    setIsActive,
    isActive,
    isEdit,
    updateData
}) {


    return (
        <>
            <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
            writer :<S.MyInput type="text" onChange={onChangeWriter} /><br />
            title :<S.MyInput type="text" onChange={onChangeTitle} /><br />
            contents :<S.MyInput type="text" onChange={onChangeContents} /><br />
            <S.MyBtn
                onClick={isEdit ? updateData : getData}
                color2={isActive} >
                {isEdit ? "수정하기" : "등록하기"}
            </S.MyBtn>
            <div>{allData}</div>
            <button onClick={() => setIsActive(!isActive)}>
                send data to parent
            </button>
        </>
    )
}