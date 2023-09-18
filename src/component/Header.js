import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/Constant';


const Header = () => {
  const navigate =useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store) => store.user);
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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44 mx-auto md:mx-0"
     src={Logo} 
    alt="logo" />
    
   { user && (
    <div className="flex p-2">
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