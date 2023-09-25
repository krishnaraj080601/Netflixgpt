import { useDispatch, useSelector } from "react-redux";
import { Api } from "../utils/Constant";
import { useEffect } from "react";
import { addTopratedMovies } from "../utils/moviesSlice";

const useTopratedMovies=()=>{

    const dispatch=useDispatch();
    const TopratedMovies = useSelector((store) => store.movies.UpComingMovies);
     const getTopratedMovies= async() =>{
       const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",Api);
     
       const json =await data.json();
       console.log(json.results);
       dispatch(addTopratedMovies(json.results));
     };
     useEffect(() =>{
  !TopratedMovies && getTopratedMovies();
     },[]);
   };
   export default useTopratedMovies;