import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import * as S from './style'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutation() {

    const [allData, setAllData] = useState('ㅎㅇ');
    const [clientData] = useMutation(CREATE_BOARD)


    const getData = async () => {
        const result = await clientData({
            variables: {
                writer: "철수", title: "제목입니다~", contents: "내요이에요~~"
            }
        })
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