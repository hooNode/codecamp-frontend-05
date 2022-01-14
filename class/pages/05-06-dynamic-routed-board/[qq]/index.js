import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'


const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number : $number){
            writer
            title
            contents
        }
    }
`

export default function DynamicRoutePage() {

    const router = useRouter()

    // const getData = async () => {
    //     const result = await lazy({
    //         variables: {
    //             number: Number(router.query.qq)
    //         }
    //     })

    // }

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.qq)
        }
    })





    return (
        <>
            <div>{router.query.qq}페이지 이동완료</div>
            <div>
                작성자: {data?.fetchBoard.writer}<br />
                제목: {data?.fetchBoard.title}<br />
                내용: {data?.fetchBoard.contents}
                {/* <button onClick={getData}>asd</button> */}
            </div>
        </>
    )
}
