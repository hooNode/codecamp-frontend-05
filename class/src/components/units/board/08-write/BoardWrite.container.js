import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, gql } from '@apollo/client'
import Board from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite({
    isEdit
}) {
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [allData, setAllData] = useState('ㅎㅇ');
    const [clientData] = useMutation(CREATE_BOARD)
    const [editData] = useMutation(UPDATE_BOARD)
    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [pushnb, setPushnb] = useState(0)


    const getData = async () => {
        const result = await clientData({
            variables: {
                writer: writer, title: title, contents: contents
            }
        })
        console.log(result)
        setAllData(result.data.createBoard.message)
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
        setPushnb(Number(result.data.createBoard.number))

    }

    const updateData = async () => {
        const data = await editData({
            variables: {
                number: pushnb,
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(data)
        router.push(`/08-05-boards/${router.query.mynumber}`)
    }

    const onChangeWriter = (e) => {
        setWriter(e.target.value)
        if (e.target.value && title && contents) {
            setIsActive(true)
        }


    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
        if (e.target.value && writer && contents) {
            setIsActive(true)
        }

    }
    const onChangeContents = (e) => {
        setContents(e.target.value)
        if (e.target.value && title && writer) {
            setIsActive(true)
        }

    }
    return (
        <Board
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            getData={getData}
            updateData={updateData}
            allData={allData}
            setAllData={setAllData}
            isActive={isActive}
            setIsActive={setIsActive}
            isEdit={isEdit}
        />
    )
}