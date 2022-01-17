import Board from './BoardWrite.presenter'
import { useRouter } from 'next/router'

export default function boardWrite() {
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
            <Board onClickMove1={onClickMove1} onClickMove2={onClickMove2} onClickMove3={onClickMove3} />
        </>

    )
}