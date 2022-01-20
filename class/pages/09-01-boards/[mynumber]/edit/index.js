import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`
export default function BoardsEditPage() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.mynumber) }
    })
    // const result = {
    //     title: data.fetchBoard.writer,
    //     writer: data.fetchBoard.title,
    //     contents: data.fetchBoard.contents
    // }
    // const title = data.fetchBoard.writer

    return <BoardWrite isEdit={true} data={data} />
}