import { AxiosClient } from "./api/AxiosClient";
import { SearchQueryParams, SingleMovieQueryParams, YTSMovieDetailsResponse, YTSMoviesResponse } from "./api/types";
import { buildSearchEndpoint, buildSingleMovieEndpoint } from "./utils";

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

