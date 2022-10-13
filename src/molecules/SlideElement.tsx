import Button from "../atoms/Button";
import { COLORS, Typography } from "../globalStyles";
import { YMovie } from "../services/api/types";
import { ReactComponent as PlayIcon } from "../assets/playIcon.svg";
import {
  DarkLayer,
  MovieCoverDetails,
  MovieCoverLayer,
} from "../atoms/MovieCoverLayers";
import styled from "styled-components";
import { IMDbrating,  RottenTomatoesRating } from "../atoms/Ratings";

type Props = {
  movie: YMovie;
  select: (value: React.SetStateAction<string>) => void;
};

const Title = Typography({ size: "5xl", weight: "Bold", align: "left" });
const P = Typography({ size: "lg", weight: "Medium", align: "left" });

const MovieCover = styled.img`
  position: absolute;
  top: 18vh;
  right: 12%;
  margin: 1.2rem;
  height: 24rem;
  width: 18rem;
  z-index: 8;
`;

const RatingsInline = styled.div`
  display: flex;
  width: 60%;
  margin-left: 8px;
  justify-content: space-between;
`

const SlideElement = ({ movie, select }: Props) => {
  const watchTrailer  = () => {
    select(movie.yt_trailer_code);
  }
  return (
    <>
      <MovieCoverLayer image={movie.background_image}>
        <DarkLayer />
        <MovieCover src={movie.large_cover_image} />
        <MovieCoverDetails>
          <Title>{movie.title_long}</Title>
          <RatingsInline>
          <IMDbrating rating={movie.rating * 10} />
          <RottenTomatoesRating rating={movie.rating * 10 + 8} />
          </RatingsInline>
          <P>{movie.description_full.length <= 190 ? movie.description_full : movie.description_full.slice(0, 190)+" ..."}</P>
          <Button color={COLORS.Red["500"]} onClick={watchTrailer}>
            {" "}
            <PlayIcon fill="white" /> <P color="white"> Watch Trailer </P>{" "}
          </Button>
        </MovieCoverDetails>
      </MovieCoverLayer>
    </>
  );
};

export default SlideElement;
