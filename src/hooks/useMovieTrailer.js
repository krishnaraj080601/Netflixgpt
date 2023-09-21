import { useEffect } from "react";
import { Api } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerViedo } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{
  console.log(movieId);
    const dispatch=useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMoviesViedos=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US",Api)
      const json=await data.json();
      console.log(json);
      const filterData=json.results.filter((viedo) => viedo.type ==="Trailer");
      const trailer= filterData.length? filterData[1]:json.results[0];
    console.log(trailer);
    dispatch(addTrailerViedo(trailer));
    };
    useEffect(() =>{
      !trailerVideo && getMoviesViedos();
    },[]);
};
export default useMovieTrailer;