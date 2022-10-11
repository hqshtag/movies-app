import React from 'react'
import styled from 'styled-components'
import {IMDbrating, RottenTomatoesRating} from '../atoms/Ratings'
import { Typography } from '../globalStyles'
import { YMovie } from '../services/api/types'

type Props = {
    movie: YMovie
}

const MCard = styled.div`
  margin: 1.8rem;
  width: 280px;
  height: 530px;
`


const MovieCover = styled.img`
  //margin: 1.2rem;
  // height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 8;
`;


const RatingsInline = styled.div`
  display: flex;
  width: 96%;
  margin-left: 8px;
  justify-content: space-between;
`

const Title = Typography({ size: "lg", weight: "Medium", color: "black", align: "left"})

const MovieCard = ({movie}: Props) => {
  return (
    <MCard>
      <MovieCover src={movie.large_cover_image} />
        <Title>{movie.title}</Title>
        <RatingsInline>
        <IMDbrating rating={movie.rating} color={'black'} />
        <RottenTomatoesRating rating={movie.rating + 4.8} color="black"/>
        </RatingsInline>
       

    </MCard>
  )
}

export default MovieCard