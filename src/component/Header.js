import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, SUPPORTED_LANGUAGES } from '../utils/Constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/Configslice';


const Header = () => {
  const navigate =useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(() => {
   const unsubsribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL})
          );
          navigate("/Brow");
      } 
      
      else {
          dispatch(removeUser());
          navigate("/");
      }
    });
    return () => unsubsribe();
  },[]);
  const handleGptSearchClick=() =>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44 mx-auto md:mx-0"
     src={Logo} 
    alt="logo" />
    
   { user && (
    <div className="flex p-2">
    {showGptSearch && (<select className="p-2 bg-gray-800 text-white" onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map((lang) => (
      <option key={lang.identifier} value={lang.identifier}>
        {lang.name}
        </option>
        ))}
    </select>
    )}
    <button className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}> {showGptSearch ? "Homepage" : "GPT Search"}</button>
      <img className="w-12 h-12 " src={user?.photoURL}
    alt="usericon" />
    <button onClick={handleSignOut} className="font-bold text-white">
    (Sign out)
    </button>
    </div>
    )}
    </div>
  
  )
}
  
  

export default Header;