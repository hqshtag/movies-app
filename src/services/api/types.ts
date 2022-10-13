export interface SearchQueryParams {
  page?: number;
  limit?: number;
  quality?: string;
  minimum_rating?: number;
  query_term?: string;
  genre?: string;
  sort_by?: string;
  order_by?: string;
  with_rt_ratings?: boolean;
}

export interface SingleMovieQueryParams {
  movie_id: number;
  with_images?: boolean;
  with_cast?: boolean;
}

export interface TMDBSearchQueryParams {
  api_key: string;
  query: string;
}

export interface YTSMovieDetailsResponse {
  status: string;
  status_message: string;
  data: {
    movie: YMovie;
  };
  "@meta": YTSMetaData;
}

export interface YTSMoviesResponse {
  status: string;
  status_message: string;
  data: YTSMoviesData;
  "@meta": YTSMetaData;
}

export interface TMDBFindResponse {
    results: TMDBMovie[],
    total_results: number,
}

interface YTSMoviesData {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: YMovie[];
}

interface YTSMetaData {
  server_time: number;
  server_timezone: string;
  api_version: 2;
  execution_time: string;
}

export interface YMovie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  download_count?: number;
  like_count?: number;
  summary: string;
  description_intro?: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: YTorrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

interface YTorrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface TMDBMovie {
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  adult: boolean;
  vote_average: number;
  vote_count: number;
}
