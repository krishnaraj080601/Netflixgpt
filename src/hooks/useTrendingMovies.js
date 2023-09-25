import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Api } from "../utils/Constant";
import {addTrendingMovies} from "../utils/moviesSlice";

const useTrendingMovies=()=>{

    const dispatch=useDispatch();
    const TrendingMovies = useSelector((store) => store.movies.popularMovies);
     const getTrendingMovies= async() =>{
       const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",Api);
     
       const json =await data.json();
       console.log(json.results);
       dispatch(addTrendingMovies(json.results));
     };
     useEffect(() =>{
  !TrendingMovies&& getTrendingMovies();
     },[]);
   };
   export default useTrendingMovies;