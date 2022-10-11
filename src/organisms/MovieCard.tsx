import React from 'react'
import {IMDbrating} from '../atoms/Ratings'
import { YMovie } from '../services/api/types'

type Props = {
    movie: YMovie
}

const MovieCard = ({movie}: Props) => {
  return (
    <div>
        <h3>{movie.slug}</h3>
        <IMDbrating rating={movie.rating} />
    </div>
  )
}

export default MovieCard