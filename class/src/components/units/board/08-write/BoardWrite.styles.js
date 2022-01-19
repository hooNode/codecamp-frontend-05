import styled from '@emotion/styled'

export const MyInput = styled.input``

export const MyBtn = styled.button`
    background-color: ${({ color2 }) => color2 ? "red" : "blue"};
`