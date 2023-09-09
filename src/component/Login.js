import React, {useRef, useState } from 'react'
import Header from './Header'
import { Valid } from '../utils/Valid';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const [isSignInForm,setIsSigninForm]=useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const Email =useRef(null);
  const Password =useRef(null);
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
    console.log(user)
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
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
    alt="logo" />
    </div>
    <form onSubmit={(e)=> e.preventDefault()}
    className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{isSignInForm ?"signin":"signout"}</h1>
    <input ref={Email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
    {!isSignInForm && (<input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700" />)}
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