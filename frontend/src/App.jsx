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
import Order from './pages/order/order';
import TrackOrders from './pages/order/TrackOrders';
import Contact from './pages/more/contact';
import Offers from './pages/more/offers';
import AboutUs from './pages/more/aboutUs';


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

  // order page
  {
    path:"/orders",
    element:<><Order></Order></>
  },
  {
    path:"/TrackOrder",
    element:<><TrackOrders></TrackOrders></>
  },

  // more

  {
    path:"/contact",
    element:<><Contact></Contact></>
  },
  {
    path:"/offers",
    element:<><Offers></Offers></>
  },
  {
    path:"/aboutUs",
    element:<><AboutUs></AboutUs></>
  },





]);

function App() {
  return (
 <RouterProvider router={router} />
  )
}

export default App
