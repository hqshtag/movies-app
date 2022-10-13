import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { searchMovies, selectTopRatedMovies } from '../features/movies/movieSlice';
import useDebounce from '../hooks/useDebounce';
import Featured from '../organisms/Featured';
import Modal from '../organisms/Modal';
import Slideshow from '../organisms/Slideshow';
import Topbar from '../organisms/Topbar'
import { SearchQueryParams } from '../services/api/types';
import Splash from './Splash';


type Props = {}

const Home = (props: Props) => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectTopRatedMovies);
    const loading = useAppSelector((state: RootState) => state.movies.loading);
    const [keyword, setKeyword] = useState('');
    const debouncedKeyword = useDebounce(keyword, 800);


    const [showModal, setShowModal] = useState(false)
    const [selectedVideoId, setSelectedVideoId] = useState('');

    useEffect(() => {
        let qs: SearchQueryParams = {
            page: 1,
            limit: 20,
            with_rt_ratings: true
        }
        if (debouncedKeyword && debouncedKeyword.length >= 3) {
            qs.query_term = debouncedKeyword;
        }
        dispatch(searchMovies(qs));
    }, [debouncedKeyword, dispatch])

    useEffect(() => {

        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [showModal])

    useEffect(() => {
        if (!showModal && selectedVideoId !== '') setShowModal(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedVideoId])


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let value = e.target.value;
        setKeyword(value);
    };

    return (
        <div>
            {loading ? <Splash /> : <><Topbar handleSearchChange={handleTextChange} searchKeyWord={keyword} />
                <Slideshow movies={movies} selectVideoId={setSelectedVideoId} />
                <Featured />
                {(showModal && selectedVideoId !== '') && <Modal videoId={selectedVideoId} setShowModal={setShowModal} />}
            </>}
        </div>
    )
}

export default Home