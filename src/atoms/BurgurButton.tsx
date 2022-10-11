import React from 'react'
import styled from 'styled-components';
import { ReactComponent as BurgerIcon } from "../assets/burgerIcon.svg";
import { COLORS } from '../globalStyles';

type Props = {}

const Button = styled.button`
    cursor: pointer;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: ${COLORS.Pink[700]};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`

const BurgerButton = (props: Props) => {
  return (
    <Button><BurgerIcon width={18.3} height={11.4} /></Button>
  )
}

export default BurgerButton