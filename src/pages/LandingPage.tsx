import React from 'react'
import { useAppDispatch } from '../app/hooks';
import Home from '../templates/Home'

type Props = {}

const HomePage = (props: Props) => {

  const dispatch = useAppDispatch();


  return (
    <div>

      <Home/>

    </div>
  )
}

export default HomePage