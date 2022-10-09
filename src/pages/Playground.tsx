import React from 'react'
import { Typography } from '../globalStyles'

const Text = Typography({size: '9xl', weight: "Bold"})

type Props = {}

const Playground = (props: Props) => {
  return (
    <div>
        <Text>Playground</Text>
    </div>
  )
}

export default Playground