import { useRouter } from 'next/router'

export default function StaticRoutingPage() {
    const router = useRouter()
    const onClickMove = () => {
        router.pop()
    }
    return (
        <>
            <span>페이지 이동이 완료되었습니다.</span>
            <button onClick={onClickMove}>뒤로가기</button>
        </>
    )
}