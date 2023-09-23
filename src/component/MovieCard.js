import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/Constant';


const MovieCard = ({posterPath}) => {
  

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 
  const imageStyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.5s ease-in-out",
  };
  if(!posterPath) return null;
  return (
  <div className="w-36 md:w-48 pr-4"onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
  <img alt="Movie Card" src={IMG_CDN_URL+posterPath} style={imageStyle} />
  </div>
  );
  
};

export default MovieCard;