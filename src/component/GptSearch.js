import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_url } from '../utils/Constant';

const GptSearch = () => {
  return (
    <>
    <div className="absolute-z-10">
    <img className="h-screen object-cover" src={BG_url} 
    alt="logo" />
    </div>
    <div className="">
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>
    </>
  );
};

export default GptSearch;