import config from "./api/config.json";
import {
  TMDBSearchQueryParams,
  SearchQueryParams,
  SingleMovieQueryParams,
  TMDBMovie,
} from "./api/types";

export function buildSearchEndpoint(querySettings: SearchQueryParams) {
  let endpoint = `${config.endpoints.moviesList}`;

  Object.entries(querySettings).forEach(
    ([key, value], index) =>
      (endpoint +=
        index === 0 && key && value
          ? `?${key}=${value}`
          : key && value
          ? `&${key}=${value}`
          : "")
  );

  return endpoint;
}

export function buildSingleMovieEndpoint(queryParams: SingleMovieQueryParams) {
  let { movie_id } = queryParams;
  return `${config.endpoints.movie}?movie_id=${movie_id}`;
}

export function buildTMDBSearchEndpoint(
  queryParams: TMDBSearchQueryParams
) {
  return `${config.endpoints.TMDBBaseUrl}/search/movie?api_key=${queryParams.api_key}&query=${queryParams.query}`;
}


export function buildIMDBImageSrc (movie: TMDBMovie){
  return `${config.endpoints.TMDBImageBaseUrl}/original/${movie.poster_path}`
}