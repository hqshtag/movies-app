import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { searchMovies } from '../features/movies/movieSlice';
import useDebounce from '../hooks/useDebounce';
import Topbar from '../organisms/Topbar'
import { SearchQueryParams, YMovie } from '../services/api/types';


type Props = {}

const Home = (props: Props) => {
    const dispatch = useAppDispatch();

    const [keyword, setKeyword] = useState('');
    const [movies, setMovies] = useState<YMovie[]>([]);

    const debouncedKeyword = useDebounce(keyword, 800);

    useEffect(()=>{
        let qs: SearchQueryParams = {
            page: 1,
            limit: 10,
            with_rt_ratings: true
        }
        if(debouncedKeyword && debouncedKeyword.length >= 3){
            qs.query_term = debouncedKeyword;
        }
        dispatch(searchMovies(qs)).then(unwrapResult).then(res => {
            if(res && res?.length > 0){
                setMovies(res);
            }
        })
    }, [debouncedKeyword, dispatch])


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let value = e.target.value;
        setKeyword(value);
    };

  return (
    <div>
        <Topbar handleSearchChange={handleTextChange} searchKeyWord={keyword} />

    </div>
  )
}

export default Home