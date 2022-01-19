import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

//fetchProduct로 수정
const FETCH_PRODUCT = gql`
        query fetchProduct($productId: ID){
            fetchProduct(productId: $productId){
                _id
                seller
                name
                detail
                price
                createdAt
            }
        }
    `

export default function BoardsDetailPage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.mynumber }
    })
    const onClickMoveToEdit = () => {
        router.push(`/08-06-product/${router.query.mynumber}/edit`)
    }

    console.log(data)

    return (
        <div>
            <div>{router.query.mynumber}님 게시글 페이지 이동 완료!!!</div>
            <div>작성자: {data?.fetchProduct?.seller}</div>
            <div>상품: {data?.fetchProduct?.name}</div>
            <div>내용: {data?.fetchProduct?.detail}</div>
            <div>가격: {data?.fetchProduct?.price}</div>
            <button onClick={onClickMoveToEdit}>수정하기</button>
        </div>
    )

}