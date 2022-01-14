import { useRouter } from 'next/router'

export default function StaticRoutingPage() {
    const router = useRouter()


    const onClickMove1 = () => {

        router.push("/05-06-dynamic-routed-board/1")
    }
    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/2")

    }
    const onClickMove3 = (e) => {
        router.push("/05-06-dynamic-routed-board/1000")

    }

    return (
        <>
            <button onClick={onClickMove1} history="/05-05-dynamic-routing-board">1번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
        </>

    )
}