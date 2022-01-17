export default function boardWrite({ onClickMove1, onClickMove2, onClickMove3 }) {
    return (
        <>
            <button onClick={onClickMove1} history="/05-05-dynamic-routing-board">1번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
        </>
    )
}