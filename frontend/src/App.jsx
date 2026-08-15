import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/home/Home';
import './App.css'
import Shop from './pages/shop/Shop';
import ProductDetails from './pages/product/ProductDetails';
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import Cart from './pages/cart/Cart';


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
    element:<><ProductDetails></ProductDetails></>,
  },

  // add cart page 

  {
    path:"/cart",
    element:<><Cart></Cart></>,
  },
   {
    path:"/productDetails",
    element:<><ProductDetails></ProductDetails></>,
  },

  // user 
  {
    path:"/login",
    element:<><Login></Login></>,
  },
  {
    path:"/register",
    element:<><Register></Register></>,
  },

]);

function App() {
  return (
 <RouterProvider router={router} />
  )
}

export default App
