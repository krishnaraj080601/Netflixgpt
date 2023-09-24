import { useDispatch } from "react-redux";
import { Api } from "../utils/Constant";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = ()=>{
    const dispatch =useDispatch();
    const getUpComing=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",Api);
        const json =await data.json();
       dispatch(addUpComingMovies(json?.results))
       console.log("top rated -",json?.results);
    }
    useEffect(()=>{
        getUpComing();
    },[])


}
export default  useUpComingMovies;