import React from 'react'
import styled from 'styled-components'
import Logo from "../assets/icon.png"
import { COLORS } from '../globalStyles'

type Props = {}


const Wrapper = styled.div`
    background: ${COLORS.Red[50]};
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vh;
`

const Splash = (props: Props) => {
  return (
    <Wrapper>
        <img src={Logo} height={250} width={250} alt="Avatar" />
    </Wrapper>
  )
}

export default Splash