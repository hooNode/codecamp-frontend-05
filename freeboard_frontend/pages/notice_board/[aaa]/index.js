import * as S from '../../../styles/board.js';
import React from 'react'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

import { RedditCircleFilled, EnvironmentFilled, LikeFilled, PushpinFilled } from '@ant-design/icons';


const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId : $boardId){
            writer
            title
            contents
        }
    }
`

export default function DynamicRoutePage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.aaa
        }

    })
    return (
        <S.Fragment>
            <S.Wrapper>
                <S.Content>
                    <S.Content_Header>
                        <S.Profile>
                            <RedditCircleFilled style={{ fontSize: "65px", color: "gray" }} />
                            <S.Sub_Profile>
                                <span>{data?.fetchBoard?.writer}</span>
                                <p>Date: 22.01.14</p>
                            </S.Sub_Profile>
                        </S.Profile>
                        <S.Logo>
                            <PushpinFilled style={{ color: "#FFD600", fontSize: "35px", marginRight: "5px" }} />
                            <EnvironmentFilled style={{ color: "#FFD600", fontSize: "35px" }} />
                        </S.Logo>
                    </S.Content_Header>
                    <S.Content_Body>
                        <S.Body_Title>
                            {data?.fetchBoard?.title}<br />
                        </S.Body_Title>
                        <S.Body_Picture>
                            <img src="http://imgc.1300k.com/aaaaaib/goodsdesc/215025/01/215025014746_D5.jpg" style={{ width: "700px", height: "550px" }} />
                        </S.Body_Picture>
                        <S.Body_Text>
                            {data?.fetchBoard?.contents}<br />
                        </S.Body_Text>
                        <S.Body_Youtube>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aznRuPJhx5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </S.Body_Youtube>
                    </S.Content_Body>
                    <S.Content_Footer>
                        <S.Like_Btn>
                            <LikeFilled style={{ color: "#FFD600", fontSize: "30px" }} />
                            1920
                        </S.Like_Btn>
                        <S.Dislike_Btn>
                            <LikeFilled style={{ fontSize: "30px" }} />
                            1920
                        </S.Dislike_Btn>
                    </S.Content_Footer>
                </S.Content>
                <S.Body>
                    <S.List_Btn>

                    </S.List_Btn>
                    <S.Edit_Btn>

                    </S.Edit_Btn>
                    <S.Delete_Btn>

                    </S.Delete_Btn>
                </S.Body>
                <S.Footer>
                    <S.Footer_Title>
                        댓글
                    </S.Footer_Title>
                    <S.Footer_Tag>
                        <S.Tag_Writer>

                        </S.Tag_Writer>
                        <S.Tag_Password>

                        </S.Tag_Password>
                        <S.Tag_Review>

                        </S.Tag_Review>
                    </S.Footer_Tag>
                    <S.Footer_Text>
                        <S.Text>

                        </S.Text>
                        <S.Text_Btn>

                        </S.Text_Btn>
                    </S.Footer_Text>
                    <S.Footer_List>

                    </S.Footer_List>
                </S.Footer>
            </S.Wrapper>
        </S.Fragment>
    )
}
