import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import * as S from './style'

export default function RestGet() {

    const [allData, setAllData] = useState('ㅎㅇ');

    const getData = async () => {
        const result = await axios.get('https://koreanjson.com/users')
        console.log(result)
    }

    return (
        <S.Fragment>
            <button onClick={getData}>Rest-Api 가져오기</button>
            <div>{allData}</div>
        </S.Fragment>
    );
};