import React from 'react'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import Board from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false)
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
        <Board
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            getData={getData}
            allData={allData}
            setAllData={setAllData}
            isActive={isActive}
            setIsActive={setIsActive}
        />
    )
}