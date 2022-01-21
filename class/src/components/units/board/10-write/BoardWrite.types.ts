import { ChangeEvent } from 'react'

export interface IBoardWriteUI {
    bbb: string
    ccc: () => void
    xxx: () => void
    ddd: (e : ChangeEvent<HTMLInputElement>) => void
    eee: (e : ChangeEvent<HTMLInputElement>) => void
    fff: (e : ChangeEvent<HTMLInputElement>) => void
    isActive:boolean
    isEdit: boolean
    data:any
}

export interface IBoardWrite {
    isEdit: boolean
    data?: any
}

export interface IMyProps {
    ggg:boolean,
}