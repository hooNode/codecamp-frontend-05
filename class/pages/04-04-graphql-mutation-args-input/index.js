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


export default function GraphqlMutationArgsInput() {

    const [allData, setAllData] = useState('ㅎㅇ');
    const [clientData] = useMutation(CREATE_BOARD)
    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')



    const getData = async () => {
        const result = await clientData({
            variables: {
                writer: writer, title: title, contents: contents
            }
        })
        console.log(result)
        setAllData(result.data.createBoard.message)
    }

    const onChangeWriter = (e) => {
        setWriter(e.target.value)

    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value)

    }
    const onChangeContents = (e) => {
        setContents(e.target.value)

    }


    return (
        <S.Fragment>
            writer :<input type="text" onChange={onChangeWriter} /><br />
            title :<input type="text" onChange={onChangeTitle} /><br />
            contents :<input type="text" onChange={onChangeContents} /><br />
            <button onClick={getData}>GRAPHQQL-API 요청하기</button>
            <div>{allData}</div>
        </S.Fragment>
    );
};