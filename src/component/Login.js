import React, {useRef, useState } from 'react'
import Header from './Header'
import { Valid } from '../utils/Valid';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_url } from '../utils/Constant';

const Login = () => {
  const [isSignInForm,setIsSigninForm]=useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const Email =useRef(null);
  const Password =useRef(null);
  const dispatch=useDispatch();
  const handleButtonClick = ()=> {
    console.log(Email.current.value);
    console.log(Password.current.value);
     
    
    const message = Valid(Email.current.value, Password.current.value);
    setErrorMessage(message);
    if (message) return;
    if(!isSignInForm){

createUserWithEmailAndPassword(auth, Email.current.value,Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL:"https://occ-0-3662-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName,photoURL}=auth.currentUser
      dispatch(addUser({uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL}));
      
      
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage);
    // ..
  });

    }
    else{
      signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+" - "+errorMessage);
  });

    }
    
  }
  const toggleSignInForm = ()=> {
    setIsSigninForm(!isSignInForm)
  }
  return (
    <div>
    <Header/>
    <div className="absolute bg-black h-screen object-cover w-full ">
    <img src={BG_url} 
    alt="logo" />
    </div>
    <form onSubmit={(e)=> e.preventDefault()}
    className=" w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{isSignInForm ?"Signin":"SignUp"}</h1>
    <input ref={Email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
    {!isSignInForm && (<input ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700" />)}
    <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
    <input ref={Password} type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
    <button className="p-4 my-6 bg-red-700 w-full " onClick={handleButtonClick}>
    {isSignInForm ?"Signin":"Sigup"}
    </button>
    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
    {isSignInForm ?"New to Neflix ?Sign up now":"already registered sign in"}
    </p>
    </form>
    </div>
  
  )
}

export default Login