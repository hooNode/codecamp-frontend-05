// import { useRouter } from 'next/router'
import { useMutation, useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number : $number){
        message
        }
    }
`

const Row = styled.div`
padding: 20px 20px 0px 20px;
    display: flex;
`

const Column = styled.div`
    width: -webkit-fill-available;
    margin: 10px 0px;
`

export default function MapCheckboxDelete() {
    const { data } = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onClickDelete = (e) => {
        deleteBoard({
            variables: { number: Number(e.target.value) },
            refetchQueries: [{ query: FETCH_BOARDS }]
            //variables가 있으면 똑같이 써줘야한다.
        })
    }

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column><button value={el.number} onClick={onClickDelete}>삭제</button></Column>
                </Row>
            ))}
        </div>

    )
}