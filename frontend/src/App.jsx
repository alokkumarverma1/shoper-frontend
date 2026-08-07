import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/home/Home';
import './App.css'
import Shop from './pages/shop/Shop';
import AddCart from './pages/addCart/AddCart';
import ProductDetails from './pages/reusable-pages/ProductDetails';
import SingIn from './pages/user/SingIn';
import ProductFullData from './pages/product/ProductFullData';


const router = createBrowserRouter([
  {
    path: "/",
    element:<><Home></Home></>,
  },

  // search page
   {
    path: "/search",
    element:<><Shop></Shop></>,
  },

  // product items 
   {
    path: "/productDetails",
    element:<><ProductFullData></ProductFullData></>,
  },

  // add cart page 

  {
    path:"/cart",
    element:<><AddCart></AddCart></>,
  },
   {
    path:"/productDetails",
    element:<><ProductDetails></ProductDetails></>,
  },

  // user 
  {
    path:"/singIn",
    element:<><SingIn></SingIn></>,
  },

]);

function App() {
  return (
 <RouterProvider router={router} />
  )
}

export default App
