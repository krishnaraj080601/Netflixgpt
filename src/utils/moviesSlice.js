import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        PopularMovies:null,
        trailerViedo:null,
        addUpComingMovies:null,

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
            state.upcomingmovies=action.payload;
         },

    },
});
export const {addNowPlayingMovies,addTrailerViedo,addPopularMovies,addUpComingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;