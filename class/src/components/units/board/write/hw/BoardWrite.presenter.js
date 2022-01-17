import * as S from '../BoardWrite.styles'
export default function boardWrite({
    onClickMove1, onClickMove2, onClickMove3,
    onChangeWriter, onChangeTitle, onChangeContents, getData, allData, setIsActive, isActive
}) {
    return (
        <>
            <button onClick={onClickMove1} history="/05-05-dynamic-routing-board">1번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>

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