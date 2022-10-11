import React from 'react'
import styled from 'styled-components';
import BurgerButton from '../atoms/BurgurButton';
import Logo from '../atoms/Logo'
import SearchInput from '../atoms/SearchInput'

type Props = {
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchKeyWord: string
}


const Link = styled.a`
  font-size: 1.225rem;
  font-weight: 500;
  margin: auto 24px;
  color: white;
  text-decoration: none;
`

const NavContainer = styled.div`
  position: fixed;
  width: 94vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`




const Topbar = ({
    handleSearchChange,
    searchKeyWord
}: Props) => {
    

  return (
    <NavContainer>
        <Logo />
        <SearchInput handleChange={handleSearchChange} value={searchKeyWord} placeholder="What do you want to watch?" />
        <div style={{display: 'flex'}}>
          <Link>Sign in</Link>
          <BurgerButton />
        </div>
    </NavContainer>
  )
}

export default Topbar