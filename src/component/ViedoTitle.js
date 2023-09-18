import React from 'react'

const ViedoTitle = ({title,overview}) => {
  return ( 
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div>
    <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80"> ▶ play</button>
    <button className="mx-2 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg">ℹ More Info</button>
    </div>

  </div>
  );
};

export default ViedoTitle;