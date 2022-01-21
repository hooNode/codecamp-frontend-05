import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import PBoardDetail from './BoardDetail.presenter';
import { FETCH_BOARD, CREATE_BOARD_COMMENT } from './BoardDetail.queries';

export default function DynamicRoutePage() {
  const router = useRouter();
  const [commentData] = useMutation(CREATE_BOARD_COMMENT);
  const [writer, setWriter] = useState('');
  const [contents, setContent] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(0.0);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.aaa,
    },
  });

  const writerChange = (e) => {
    setWriter(e.target.value);
  };

  //////여기부터 이어서 하면 됨
  const passwordChange = (e) => {};
  const constentsChange = (e) => {};
  const ratingChange = (e) => {};

  const btnClick = async () => {
    const result = await commentData({
      variables: {
        createBoardComment: {
          writer: writer,
          password: password,
          contents: contents,
          rating: rating,
        },
        boardId: router.query.aaa,
      },
    });
  };

  const btnMoveToEdit = () => {
    router.push(`/notice/${router.query.aaa}/edit`);
  };
  const btnMoveToList = () => {
    router.push(`/notice/list`);
  };
  return (
    <PBoardDetail
      data={data}
      btnMoveToList={btnMoveToList}
      btnMoveToEdit={btnMoveToEdit}
      btnClick={btnClick}
    />
  );
}
