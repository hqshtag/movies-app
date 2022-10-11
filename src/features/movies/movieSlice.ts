import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { getMovieDetails, getMovies } from '../../services';
import { SearchQueryParams, SingleMovieQueryParams, YMovie } from '../../services/api/types';

type MoviesStateType = {
    data: YMovie[],
    selectedMovie?: YMovie ,
    loading: boolean
}

const initialState: MoviesStateType = {
    data: [],
    loading: false
}


export const searchMovies = createAsyncThunk(
    'yts/movies',
    async(queryParams: SearchQueryParams, {rejectWithValue}) => {
        try {
            let res = await getMovies(queryParams);
            if(res && res.status === "ok" && res.data?.movie_count > 0){
               return res.data.movies
            }
            rejectWithValue(new Error('No Movies Found'));
        } catch (error) {
            rejectWithValue(error)
        }
       
    }
)

export const retrieveSingleMovie = createAsyncThunk(
    'yts/movieDetails',
    async(queryparams: SingleMovieQueryParams, {rejectWithValue}) => {
        try {
            let res = await getMovieDetails(queryparams);
            if(res && res.status === "ok" && res.data?.movie){
                return res.data.movie
            }
            rejectWithValue(new Error('Movie not found'));

        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    unselect: (state) => {
        state.selectedMovie = undefined;
    },
    clearData: (state) => {
        state.data = [];
        state.loading = false;
    }
  },
  extraReducers: (builder) => {
      builder.addCase(searchMovies.pending, (state) => {
        state.loading = true
      }).addCase(searchMovies.fulfilled, (state, action)=>{
        if(action.payload){
            state.data = action.payload;
        }
        state.loading = false;
      }).addCase(searchMovies.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      }).addCase(retrieveSingleMovie.pending, (state) => {
        state.loading = true;
      }).addCase(retrieveSingleMovie.fulfilled, (state, action) => {
        if(action.payload){
            state.selectedMovie = action.payload;
        }
        state.loading = false;
      }).addCase(retrieveSingleMovie.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      })
  },
});

export const selectMovies = (state: RootState) => state.movies.data;
export const selectTopRatedMovies = (state: RootState) => state.movies.data.filter(m=>m.rating > 6 && movieWithCoverAndBackround(m));


function movieWithCoverAndBackround(m: YMovie){
  return m.background_image_original && m.large_cover_image
}

export const {unselect, clearData} = movieSlice.actions

export default movieSlice.reducer