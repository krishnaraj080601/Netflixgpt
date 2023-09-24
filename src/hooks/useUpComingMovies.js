import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Api } from "../utils/Constant";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies=()=>{

    const dispatch=useDispatch();
    const UpComingMovies = useSelector((store) => store.movies.UpComingMovies);
     const getUpComingMovies= async() =>{
       const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",Api);
     
       const json =await data.json();
       console.log(json.results);
       dispatch(addUpComingMovies(json.results));
     };
     useEffect(() =>{
  !UpComingMovies && getUpComingMovies();
     },[]);
   };
   export default useUpComingMovies;