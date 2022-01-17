import PBoardCreate from './BoardCreate.presenter'
import React from 'react'
import { CREATE_BOARD } from './BoardCreate.queries'
import { useMutation, gql } from '@apollo/client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'



export default function CreateBoard() {
    const router = useRouter()

    const [msg1, setMsg1] = useState(false);
    const [msg2, setMsg2] = useState(false);
    const [msg3, setMsg3] = useState(false);
    const [msg4, setMsg4] = useState(false);
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');
    const [word3, setWord3] = useState('');
    const [word4, setWord4] = useState('');

    const [onBtn, setOnBtn] = useState(true);

    const [allData, setAllData] = useState('');
    const [clientData] = useMutation(CREATE_BOARD)
    const [modaltime, setModaltime] = useState(false);

    const checkWording1 = (e) => {
        setWord1(e.target.value);
        if (e.target.value === "") {
            setMsg1(true);
        } else {
            setMsg1(false);
        }
        if (e.target.value && word2 && word3 && word4) {
            setOnBtn(false)
            console.log("버튼타입변해효~", onBtn);
        }
    }
    const checkWording2 = (e) => {
        setWord2(e.target.value);
        if (e.target.value === "") {
            setMsg2(true);
        } else {
            setMsg2(false);
        }
        if (e.target.value && word1 && word3 && word4) {
            setOnBtn(false)
            console.log("버튼타입변해효~", onBtn);
        }
    }
    const checkWording3 = (e) => {
        setWord3(e.target.value);
        if (e.target.value === "") {
            setMsg3(true);
        } else {
            setMsg3(false);
        }
        if (e.target.value && word2 && word1 && word4) {
            setOnBtn(false)
            console.log("버튼타입변해효~", onBtn);
        }
    }
    const checkWording4 = (e) => {
        setWord4(e.target.value);
        if (e.target.value === "") {
            setMsg4(true);
        } else {
            setMsg4(false);
        }
        if (e.target.value && word2 && word3 && word1) {
            setOnBtn(false)
            console.log("버튼타입변해효~", onBtn);
        }
    }

    const btnClick = async () => {
        if ((word1 !== '') && (word2 !== '') && (word3 !== '') && (word4 !== '')) {
            const result = await clientData({
                variables: {
                    createBoardInput: {
                        writer: word1, password: word2, title: word3, contents: word4
                    }
                }
            })

            router.push('/notice/' + result.data.createBoard._id)

            setAllData(`게시글 작성에 성공하셨습니다. ID:
          ${result.data.createBoard._id}`)
            setModaltime(true)
        } else {
            setAllData("작성 내용을 다시 입력해주세요")
            setModaltime(true)
        }

        if (word1 === '') {
            setMsg1(true);
        }
        if (word2 === '') {
            setMsg2(true);
        }
        if (word3 === '') {
            setMsg3(true);
        }
        if (word4 === '') {
            setMsg4(true);
        }
    }
    useEffect(() => {
        if (modaltime === true) {
            setTimeout(() => {
                setModaltime(false);
            }, 1000)
        };
    }, [modaltime])

    return (
        <PBoardCreate
            msg1={msg1}
            msg2={msg2}
            msg3={msg3}
            msg4={msg4}
            checkWording1={checkWording1}
            checkWording2={checkWording2}
            checkWording3={checkWording3}
            checkWording4={checkWording4}
            btnClick={btnClick}
            allData={allData}
            modaltime={modaltime}
            onBtn={onBtn}
        />
    )
}