import React from 'react'
import styled from 'styled-components'
import { IMDbrating, RottenTomatoesRating } from '../atoms/Ratings'
import { COLORS, Typography } from '../globalStyles'
import { findTheMovieDB } from '../services'
import { YMovie } from '../services/api/types'
import { buildIMDBImageSrc } from '../services/utils'
import LoadingGif from "../assets/loading.gif"
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";

type Props = {
  movie: YMovie,
}

const MCard = styled.div`
  margin: 1rem 1.8rem;
  width: 280px;
  height: 590px;
  //outline: 1px solid red;
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
const P = Typography({ size: "sm", weight: "Medium", color: COLORS.Gray[500], align: "left" })

const MovieCard = ({ movie }: Props) => {


  const imageErrorFullback = async ({currentTarget}: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const notFoundPosters = [poster1, poster2, poster3];
    currentTarget.src = LoadingGif
    const key = process.env.REACT_APP_TMDB_KEY;
    if(key){
      const res = await findTheMovieDB({
        api_key: key,
        query: movie.title
      });
      if(res.total_results && res.total_results > 0 && res.results[0].poster_path){
        currentTarget.src = buildIMDBImageSrc(res.results[0]);
      } else currentTarget.src = notFoundPosters[Math.floor(Math.random()*3)] 

    }
    
  }
  
  return (
    <MCard>
      <MovieCover src={movie.large_cover_image} onError={(e) => imageErrorFullback(e)}/>
      <Title>{movie.title}</Title>
      <P>{movie.language.toLocaleUpperCase() + ' ' + movie.year}</P>
      <RatingsInline>
        <IMDbrating rating={movie.rating} color={'black'} />
        <RottenTomatoesRating rating={movie.rating + 4.8} color="black" />
      </RatingsInline>
      <P> {movie.genres.join(', ')} </P>
    </MCard>
  )
}

export default MovieCard