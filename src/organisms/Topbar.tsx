import React from 'react'
import Logo from '../atoms/Logo'
import SearchInput from '../atoms/SearchInput'

type Props = {
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchKeyWord: string
}

const Topbar = ({
    handleSearchChange,
    searchKeyWord
}: Props) => {
    

  return (
    <div>
        <Logo />
        <SearchInput handleChange={handleSearchChange} value={searchKeyWord} placeholder="What do you want to watch?" />

    </div>
  )
}

export default Topbar