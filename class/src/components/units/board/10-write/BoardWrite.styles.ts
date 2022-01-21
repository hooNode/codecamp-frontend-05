import styled from '@emotion/styled'
import { IMyProps } from './BoardWrite.types'
export const MyInput = styled.input``




export const MyButton = styled.button`
    background-color: ${(props: IMyProps) => props.ggg === true ? "yellow" : "none"};
`