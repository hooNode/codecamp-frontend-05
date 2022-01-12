import { useState } from 'react'

export default function State() {

    const [state, setState] = useState(10);
    const [click, setClick] = useState(true);

    const plus = () => {
        setState(state + 1)
    }
    const minus = () => {
        setState(state - 1)
    }
    const zzz = () => {
        setClick(!click)
    }
    return (
        <div>
            <div>{state}</div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={zzz}>{click ? "숨기기" : "보이기"}</button>
            <div>
                {
                    click ?
                        <div>
                            안녕하세여
                        </div>
                        :
                        <div>

                        </div>
                }

            </div>
        </div>

    );
};