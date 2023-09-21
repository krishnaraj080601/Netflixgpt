import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_url } from '../utils/Constant';

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-10">
    <img src={BG_url} 
    alt="logo" />
    </div>
    <div className="pt-[10%]">
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>
    </>
  );
};

export default GptSearch;