import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import * as S from './style'
import { useMutation, gql } from '@apollo/client'

// const CREATE_BOARD = gql`
//     mutation createBoard($seller: String, $title: String, $contents: String){
//         createBoard(writer: $writer, title: $title, contents: $contents){
//             _id
//             number
//             message
//         }
//     }
// `
const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProduct() {

    const [allData, setAllData] = useState('ㅎㅇ');
    // const [clientData] = useMutation(CREATE_BOARD)
    const [clientProduct] = useMutation(CREATE_PRODUCT)
    const [seller, setSeller] = useState('')
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [price, setPrice] = useState(0)



    const getData = async () => {
        // const result = await clientData({
        //     variables: {
        //         writer: writer, title: title, contents: contents
        //     }
        // })
        const result = await clientProduct({
            variables: {
                seller: seller, createProductInput: {
                    name: name,
                    detail: detail,
                    price: price,
                }
            }
        })
        console.log(result)
        setAllData(result.data.createProduct.message)

        if (seller === '') {

            setAllData("다시해")
        }
        if (detail === '') {

            setAllData("다시해")
        }
        if (name === '') {

            setAllData("다시해")
        }
        if (price === 0) {

            setAllData("다시해")
        }


    }

    const onChangeWriter = (e) => {
        setSeller(e.target.value)

    }
    const onChangeTitle = (e) => {
        setName(e.target.value)

    }
    const onChangeContents = (e) => {
        setDetail(e.target.value)

    }
    const onChangePrice = (e) => {
        setPrice(Number(e.target.value))

    }


    return (
        <S.Fragment>
            작성자 :<input type="text" onChange={onChangeWriter} /><br />
            상품명 :<input type="text" onChange={onChangeTitle} /><br />
            상품내용 :<input type="text" onChange={onChangeContents} /><br />
            상품가격 :<input type="text" onChange={onChangePrice} /><br />
            <button onClick={getData}>상품 등록하기</button>
            <div>{allData}</div>
        </S.Fragment>
    );
};