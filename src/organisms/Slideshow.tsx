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
}

const Slideshow = ({movies}: ISlideshowProps) => {
  const rendMovies = movies.map((movie, index)=>{
    return (
      <SwiperSlide key={index}>
       <SlideElement movie={movie} />
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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{top: "-5px"}}
    >
     {rendMovies}
    </Swiper>
  );
}

export default Slideshow