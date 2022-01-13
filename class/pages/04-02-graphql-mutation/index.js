import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import * as S from './style'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation{
        createBoard(){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationArgs() {

    const [allData, setAllData] = useState('ㅎㅇ');
    const [clientData] = useMutation(CREATE_BOARD)


    const getData = async () => {
        // axios RestAPI
        // const result = await axios.get('https://koreanjson.com/posts/1')
        // const newResult = result.map((id) => <li>{id}</li>);
        // const title = result.data.title
        // setAllData(title)
        const result = await clientData({
            variables: { writer: "철수", title: "제목입니다~", contents: "내요이에요~~" }
        })
        // const newResult = result.map((id) => <li>{id}</li>);
        console.log(result)
        setAllData(result.data.createBoard.message)
    }




    return (
        <S.Fragment>
            <button onClick={getData}>GRAPHQQL-API 요청하기</button>
            <div>{allData}</div>
        </S.Fragment>
    );
};