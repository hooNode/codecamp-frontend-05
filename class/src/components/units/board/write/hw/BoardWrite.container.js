import Board from './BoardWrite.presenter'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { CREATE_BOARD } from '../BoardWrite.queries'

export default function boardWrite() {
    const [isActive, setIsActive] = useState(false)
    const [allData, setAllData] = useState('ㅎㅇ');
    const [clientData] = useMutation(CREATE_BOARD)
    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const router = useRouter()


    const onClickMove1 = () => {

        router.push("/05-06-dynamic-routed-board/1")
    }
    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/2")

    }
    const onClickMove3 = (e) => {
        router.push("/05-06-dynamic-routed-board/1000")

    }




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
        <>
            <Board
                onClickMove1={onClickMove1}
                onClickMove2={onClickMove2}
                onClickMove3={onClickMove3}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                getData={getData}
                allData={allData}
                setAllData={setAllData}
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </>

    )
}