import React, { ReactEventHandler } from 'react'
import styled from 'styled-components'
import { IMDbrating, RottenTomatoesRating } from '../atoms/Ratings'
import { Typography } from '../globalStyles'
import { findTheMovieDB } from '../services'
import { YMovie } from '../services/api/types'
import { buildIMDBImageSrc } from '../services/utils'
import LoadingGif from "../assets/loading.gif"
import { env } from 'process'

type Props = {
  movie: YMovie,
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

const Title = Typography({ size: "lg", weight: "Medium", color: "black", align: "left" })

const MovieCard = ({ movie }: Props) => {


  const imageErrorFullback = async ({currentTarget}: React.SyntheticEvent<HTMLImageElement, Event>) => {
    currentTarget.src = LoadingGif
    const key = process.env.REACT_APP_TMDB_KEY;
    if(key){
      const res = await findTheMovieDB({
        api_key: key,
        query: movie.title
      });
      if(res.total_results && res.total_results > 0 && res.results[0].poster_path){
        currentTarget.src = buildIMDBImageSrc(res.results[0]);
      } 
    }
    
  }
  
  return (
    <MCard>
      <MovieCover src={movie.large_cover_image} onError={(e) => imageErrorFullback(e)}/>
      <Title>{movie.title}</Title>
      <RatingsInline>
        <IMDbrating rating={movie.rating} color={'black'} />
        <RottenTomatoesRating rating={movie.rating + 4.8} color="black" />
      </RatingsInline>
    </MCard>
  )
}

export default MovieCard