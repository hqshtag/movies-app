import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import { selectMovies } from "../features/movies/movieSlice";
import { Typography } from "../globalStyles";
import MovieCard from "../molecules/MovieCard";
import { checkImg } from "../services/utils";

type Props = {};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 99%;
  margin: auto;
`;

const Title = Typography({
  size: "2xl",
  weight: "Medium",
  color: "black",
  align: "left",
});

const Featured = (props: Props) => {
  const movies = useAppSelector(selectMovies);


  const moviesRend = movies.map((m) => <MovieCard movie={m} key={m.imdb_code}/>);
  return (
    <>
      <Title style={{
        marginLeft: 36
      }}>Feautured</Title>
      <Container>{moviesRend}</Container>
    </>
  );
};

export default Featured;
