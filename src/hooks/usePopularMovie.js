import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { Api } from "../utils/Constant";

const usePopularMovies=()=>{

    const dispatch=useDispatch();
     const getPopularMovies= async() =>{
       const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",Api);
     
       const json =await data.json();
       console.log(json.results);
       dispatch(addPopularMovies(json.results));
     };
     useEffect(() =>{
   getPopularMovies();
     },[]);
   };
   export default usePopularMovies;