import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { YMovie } from '../services/api/types';
import { Pagination, Navigation } from 'swiper';
import SlideElement from '../molecules/SlideElement';
interface ISlideshowProps {
  movies: YMovie[]
  selectVideoId: (value: React.SetStateAction<string>) => void
}

const Slideshow = ({movies, selectVideoId}: ISlideshowProps) => {
  const rendMovies = movies.map((movie)=>{
    return (
      <SwiperSlide key={movie.imdb_code}>
       <SlideElement movie={movie} select={selectVideoId} />
      </SwiperSlide>
    )
  })

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      loop
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
     // onSlideChange={() => console.log('slide change')}
     // onSwiper={(swiper) => console.log(swiper)}
      style={{top: "-5px"}} //can't figure out what cause the miss-alignement
    >
     {rendMovies}
    </Swiper>
  );
}

export default Slideshow