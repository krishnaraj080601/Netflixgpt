import React from 'react'

const ViedoTitle = ({title,overview}) => {
  return ( 
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
    <h1 className="text-2xl mt-16 md:mt-52 md:text-5xl md:mx-32 mx-8 font-bold">{title}</h1>
    <p className="hidden md:inline-block my-16 mx-32 text-xl w-1/2 h-auto font-mono">{overview}</p>
    <div className="my-4 md:m-0">
    <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80"> ▶ play</button>
    <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">ℹ More Info</button>
    </div>

  </div>
  );
};

export default ViedoTitle;