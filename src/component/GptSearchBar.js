import React, { useRef } from 'react'
import lang from '../utils/LanguageConstant';
import { useSelector } from 'react-redux';
import openai from '../utils/openAi';

const GptSearchBar = () => {
const langKey=useSelector((store)=>store.config.lang)
const searchText=useRef(null);
const handleGptSearchClick=async() =>{
 console.log(searchText.current.value);
 const gptResults = await openai.chat.completions.create({
  messages: [{ role: 'user', content: 'Say this is a test' }],
  model: 'gpt-3.5-turbo',
});
console.log(gptResults.choices);
};
  return (
    <div className="pt-[20%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12"onClick={(e)=>e.preventDefault()}>
    <input ref={searchText} type="text" className=" p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/>
    <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded lg" onClick={handleGptSearchClick}> {lang[langKey].search}</button>
    </form>
    </div>
  )
};

export default GptSearchBar;