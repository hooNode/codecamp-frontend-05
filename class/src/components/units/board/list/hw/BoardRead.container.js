import Reading from './BoardRead.presenter'
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
export default function BoardReading() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.qq)
        }
    })

    return (
        <Reading data={data} router={router} />
    )

}

