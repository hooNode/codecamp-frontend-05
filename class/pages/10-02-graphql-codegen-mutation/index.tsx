import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import * as S from './style'
import { useMutation, gql } from '@apollo/client'
import { IMutation, IMutationCreateBoardArgs} from '../../src/commons/types/generated/types';

const CREATE_BOARD = gql`
    mutation{
        createBoard( writer: "철수", title: "제목입니다~", contents: "내요이에요~~" ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationArgs() {

    const [allData, setAllData] = useState<string>('ㅎㅇ');
    const [clientData] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)


    const getData = async () => {
        // axios RestAPI
        // const result = await axios.get('https://koreanjson.com/posts/1')
        // const newResult = result.map((id) => <li>{id}</li>);
        // const title = result.data.title
        // setAllData(title)
        const result = await clientData()
        // const newResult = result.map((id) => <li>{id}</li>);
        result.data?.createBoard?.message
        console.log(result)
        setAllData(result.data?.createBoard?.message || "쿠쿠쿠데이터가 오지 않았다네")
    }




    return (
        <S.Fragment>
            <button onClick={getData}>GRAPHQQL-API 요청하기</button>
            <div>{allData}</div>
        </S.Fragment>
    );
};