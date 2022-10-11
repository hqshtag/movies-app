import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { searchMovies, selectTopRatedMovies } from '../features/movies/movieSlice';
import useDebounce from '../hooks/useDebounce';
import Featured from '../organisms/Featured';
import Slideshow from '../organisms/Slideshow';
import Topbar from '../organisms/Topbar'
import { SearchQueryParams } from '../services/api/types';


type Props = {}

const Home = (props: Props) => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectTopRatedMovies);
    const [keyword, setKeyword] = useState('');    
    const debouncedKeyword = useDebounce(keyword, 800);

    useEffect(()=>{
        let qs: SearchQueryParams = {
            page: 1,
            limit: 20,
            with_rt_ratings: true
        }
        if(debouncedKeyword && debouncedKeyword.length >= 3){
            qs.query_term = debouncedKeyword;
        }
        dispatch(searchMovies(qs));
    }, [debouncedKeyword, dispatch])


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let value = e.target.value;
        setKeyword(value);
    };

  return (
    <div>
        <Topbar handleSearchChange={handleTextChange} searchKeyWord={keyword} />
        <Slideshow movies={movies} />
        <Featured />
    </div>
  )
}

export default Home