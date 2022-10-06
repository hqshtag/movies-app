import config from "./api/config.json";
import { SearchQueryParams, SingleMovieQueryParams } from "./api/types";

export function buildSearchEndpoint(querySettings: SearchQueryParams) {
    let endpoint = `${config.endpoints.moviesList}`;
  
    Object.entries(querySettings).forEach(
      ([key, value], index) => (endpoint += index===0 && (key && value) ? `?${key}=${value}`  : (key && value) ? `&${key}=${value}` : '')
    );
  
    return endpoint;
  }
  
export function buildSingleMovieEndpoint(queryParams: SingleMovieQueryParams){
    let {movie_id} = queryParams;
    return `${config.endpoints.movie}?movie_id=${movie_id}`;
}