import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/home/Home';
import './App.css'
import Shop from './pages/shop/Shop';


const router = createBrowserRouter([
  {
    path: "/",
    element:<><Home></Home></>,
  },
   {
    path: "/shop",
    element:<><Shop></Shop></>,
  },
]);

function App() {
  return (
 <RouterProvider router={router} />
  )
}

export default App
