import { Children, useState } from 'react'
import { createBrowserRouter , Route , RouterProvider } from "react-router-dom";
import './App.css'

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/Notfound';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';


function App() {

  let router = createBrowserRouter([
    {path:'/',element:<Layout/>, children:[

      {path:'/', element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
