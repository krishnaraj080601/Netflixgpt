import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_url } from '../utils/Constant';

const GptSearch = () => {
  return (
    <div>
    <div className="absolute -z-10">
    <img src={BG_url} 
    alt="logo" />
    </div>
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>
  );
};

export default GptSearch;