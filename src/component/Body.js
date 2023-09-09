import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login';
import Header from './Header';


const Body = () => {
  const approuter =createBrowserRouter([
    {
      path:"/",
      element:<Login/>,

    },
    {
      path:"/Header",
      element:<Header/>,

    },
  
  ]);
  return (
    <div>
    <RouterProvider router={approuter}/>
    </div>
    
  )
};

export default Body;