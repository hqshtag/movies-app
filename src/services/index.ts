import { AxiosClient } from "./api/AxiosClient";
import { TMDBSearchQueryParams, SearchQueryParams, SingleMovieQueryParams, TMDBFindResponse, YTSMovieDetailsResponse, YTSMoviesResponse } from "./api/types";
import { buildTMDBSearchEndpoint, buildSearchEndpoint, buildSingleMovieEndpoint } from "./utils";

export async function getMovies(queryParam: SearchQueryParams): Promise<YTSMoviesResponse> {
    const url = buildSearchEndpoint(queryParam);
    const res = await AxiosClient.get<YTSMoviesResponse>(url);
    return res.data;
}


export async function getMovieDetails(queryParams: SingleMovieQueryParams): Promise<YTSMovieDetailsResponse> {
    const url = buildSingleMovieEndpoint(queryParams);
    const res = await AxiosClient.get<YTSMovieDetailsResponse>(url);
    return res.data;
}

export async function findTheMovieDB(queryParams: TMDBSearchQueryParams): Promise<TMDBFindResponse> {
    const url = buildTMDBSearchEndpoint(queryParams);
    const res = await AxiosClient.get<TMDBFindResponse>(url);
    return res.data;
}
