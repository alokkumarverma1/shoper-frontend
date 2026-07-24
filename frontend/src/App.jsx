import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/home/Home';
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element:<><Home></Home></>,
  },
]);

function App() {
  return (
 <RouterProvider router={router} />
  )
}

export default App
