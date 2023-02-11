import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import All from './Component/All/All'
import Movie from './Component/Movie/Movie'
import People from './Component/People/People'
import Layout from './Component/Layout/Layout'
import Api from './Component/Api/Api'
import Home from './Component/Home/Home'

export default function App() {
  let Routing= createBrowserRouter([
    {path:'/' , element:<Layout/>,children:[
            {index:true, element:<Home />},

      {path:'/api' , element:<Api/>,children:[
        {path:'/api/all' , element:<All />},
        {path:'/api/people' , element:<People />},
        {path:'/api/movie' , element:<Movie />},


      ]},
      // {path:'/all' , element:<All />},
      // {path:'/movie' , element:<Movie />},
      // {path:'/people' , element:<People />},
    ]},

  ])
  return (
    <RouterProvider router={Routing}/>

  )
}
