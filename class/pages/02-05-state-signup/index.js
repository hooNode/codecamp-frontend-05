import { useState } from 'react';
export default function StateSignup() {

    const [hello, setHello] = useState("안녕하세요");

    const [state, setState] = useState(0);
    const [email, setEmail] = useState("");

    const [confirmNum, setConfirmNum] = useState("000000");

    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [hide, setHide] = useState("password");
    const [msg1, setMsg1] = useState(true);
    const [msg2, setMsg2] = useState(true);


    //첫 번째 과제
    const helloword = () => {
        setHello("반갑습니다");
    }

    //두 번째 과제
    let count = 0;
    const plusLet = () => {
        count++;
        document.getElementById("let").innerText = count;
    }
    const plusState = () => {
        setState(state + 1)
    }

    //세 번째 과제
    const getLet = () => {
        document.getElementById("confirmLet").innerText = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    }

    const getState = () => {
        setConfirmNum(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'))
    }

    //네 번째 과제
    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword1 = e => {
        setPassword1(e.target.value);
    }

    const confirmPassword = e => {
        setPassword2(e.target.value);
    }


    const getUserId = () => {
        if (email.includes("@") === false) {
            setMsg1(false);
        } else {
            setMsg1(true);
        }

        if (password1 !== password2) {
            setMsg2(false);
        } else {
            setMsg2(true);
        }
    }

    const hidePassword = () => {
        if (hide === "password") {
            setHide("type")
        } else if (hide === "type") {
            setHide("password")
        }

    }


    return (
        <div>
            첫 번째 과제<br />
            <button onClick={helloword}>{hello}</button><br />

            두 번째 과제<br />
            <div id="let">0</div>
            <button onClick={plusLet}>let 증가</button><br />
            <div>{state}</div>
            <button onClick={plusState}>state 증가</button><br />

            세 번째 과제<br />
            <div id="confirmLet">000000</div>
            <button onClick={getLet}>let 인증번호</button><br />
            <div>{confirmNum}</div>
            <button onClick={getState}>state 인w증번호</button><br />

            네 번째 과제<br />
            이메일 : <input type="text" onChange={getEmail} /> <br />
            {msg1 ? <span>에러 메시지가 없습니다.</span> : <span>@가 없습니당</span>} <br />
            비밀번호: <input type={hide} onChange={getPassword1} /> <br />
            비밀번호 확인: <input type={hide} onChange={confirmPassword} /> <br />
            {msg2 ? <span>에러 메시지가 없습니다.</span> : <span>비밀번호가 다릅니다.</span>} <br />
            <button onClick={hidePassword}>
                {
                    hide == "password" ? "보이기" : "숨기기"
                }

            </button>
            <button onClick={getUserId}>회원가입</button>
        </div >
    )
}