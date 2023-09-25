import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        PopularMovies:null,
        trailerViedo:null,
        UpComingMovies:null,
        TrendingMovies:null,

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrailerViedo:(state,action)=>{
            state.trailerViedo=action.payload;

        },
        addUpComingMovies:(state,action)=>{
            state.UpComingMovies=action.payload;
         },
         addTrendingMovies:(state,action)=>{
            state.TrendingMovies=action.payload;
         },
         addTopratedMovies:(state,action)=>{
            state.TopratedMovies=action.payload;
         },

    },
});
export const {addNowPlayingMovies,addTrailerViedo,addPopularMovies,addUpComingMovies,addTrendingMovies,addTopratedMovies}=moviesSlice.actions;
export default moviesSlice.reducer;