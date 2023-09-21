import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_url } from '../utils/Constant';

const GptSearch = () => {
  return (
    <>
    <div>
    <img className="fixed -z-10 h-screen object-cover md:w-screen" src={BG_url} 
    alt="logo" />
    </div>
    <div className="'pt-[30%] md:pt-0">
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>
    </>
  );
};

export default GptSearch;