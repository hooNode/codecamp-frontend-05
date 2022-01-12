export default function LetCount() {

    let count = 10

    function plus() {
        count = count + 1;
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={plus}>카운트 증가</button>
        </div>

    )
}