import styled from '@emotion/styled'

export const MyInput = styled.input``


interface Iprops {
    ggg:boolean,
}
export const MyButton = styled.button`
    background-color: ${(props: Iprops) => props.ggg === true ? "yellow" : "none"};
`