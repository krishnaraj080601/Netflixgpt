import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    console.log(movies[0]);
  return (
    <div>
    <div>
    <h1>{title}</h1>
    <div>
    <MovieCard  />
    </div>
    </div>
  </div>
  );
};

export default MovieList;