import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, gql } from '@apollo/client'
import ProductUI from './product.presenter'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './product.queries'



export default function ProductNew({
    isEdit
}) {
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [allData, setAllData] = useState('ㅎㅇ');
    const [clientData] = useMutation(CREATE_PRODUCT)
    const [editData] = useMutation(UPDATE_PRODUCT)
    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [pushnb, setPushnb] = useState("")
    const [price, setPrice] = useState("")


    const getData = async () => {
        const result = await clientData({
            variables: {
                seller: writer,
                createProductInput: {
                    name: writer,
                    detail: contents,
                    price: Number(price)
                }
            }
        })
        console.log(result)
        setAllData(result.data.createProduct.message)
        router.push(`/08-06-product/${result.data.createProduct._id}`)
        setPushnb(result.data.createProduct._id)
        console.log(result.data.createProduct._id)
        console.log(typeof (result.data.createProduct._id))

    }

    const updateData = async () => {
        console.log(pushnb)
        const data = await editData({
            variables: {
                productId: router.query.mynumber,
                updateProductInput: {
                    name: writer,
                    detail: contents,
                    price: Number(price)
                }
            }
        })
        setAllData(data.data.updateProduct.message)

        router.push(`/08-06-product/${router.query.mynumber}`)

    }

    const onChangeWriter = (e) => {
        setWriter(e.target.value)
        if (e.target.value && title && contents) {
            setIsActive(true)
        }


    }
    const onChangeTitle = (e) => {
        setPrice(e.target.value)
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
        <ProductUI
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