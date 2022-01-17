import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'


export default function BoardReading({ data, router }) {
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

