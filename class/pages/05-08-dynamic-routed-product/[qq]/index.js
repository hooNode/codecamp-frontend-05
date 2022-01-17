import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId : $productId){
            seller
            name
            detail
            price
        }
    }
`

export default function DynamicRoutePage() {

    const router = useRouter()

    // const getData = async () => {
    //     const result = await lazy({
    //         variables: {
    //             number: Number(router.query.qq)
    //         }
    //     })

    // }

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.qq
        }

    })

    const getData = () => {
        console.log(data)
    }






    return (
        <>
            <div>{router.query.qq}페이지 이동완료</div>
            <div>
                상품: {data ? data.fetchProduct.name : "...loading"}<br />
                작성자: {data ? data.fetchProduct.seller : "...loading"}<br />
                가격: {data ? data.fetchProduct.price : "...loading"}
                내용: {data ? data.fetchProduct.detail : ""}<br />
                <button onClick={getData}>asd</button>
            </div>
        </>
    )
}
