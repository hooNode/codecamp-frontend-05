// import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
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
const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: -webkit-fill-available;
    margin: 10px 0px;
`

export default function MapCheckbox() {
    const { data } = useQuery(FETCH_BOARDS)


    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                </Row>
            ))}
        </div>

    )
}