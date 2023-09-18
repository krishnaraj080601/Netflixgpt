import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login';
import Brow from './Brow';
const Body = () => {
  const approuter =createBrowserRouter([
    {
      path:"/",
      element:<Login/>,

    },
    {
      path:"/Brow",
      element:<Brow/>
    },
  
  ]);
  return (
    <div>
    <RouterProvider router={approuter}/>
    </div>
    
  )
};

export default Body;