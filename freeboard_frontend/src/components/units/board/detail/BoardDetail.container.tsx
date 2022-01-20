import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import PBoardDetail from './BoardDetail.presenter'
import { FETCH_BOARD } from './BoardDetail.queries'




export default function DynamicRoutePage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.aaa
        }

    })

    const btnMoveToEdit = () => {
        router.push(`/notice/${router.query.aaa}/edit`)
    }
    const btnMoveToList = () => {
        router.push(`/notice/list`)
    }
    return (
        <PBoardDetail
            router={router}
            data={data}
            btnMoveToList={btnMoveToList}
            btnMoveToEdit={btnMoveToEdit}
        />
    )
}
