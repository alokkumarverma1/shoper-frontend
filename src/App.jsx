import React from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import Search from './search/searchpage'
import Shop from './shops/shops-page'
import Regsiter from './register/regsiter'
import Login from './register/login'
import MyShope from './my-shope/my-shope'
import ProtectedRouts from './security/protectrouts'
import CreateShop from './my-shope/createShop'
import ShopDetais from './my-shope/shopDetails'
import UpdateShop from './my-shope/updateShop'



function App() {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<><Navbar></Navbar><Home></Home><Footer></Footer></>
    },
       {
      path:"/search",
      element:<><Navbar></Navbar><Search></Search><Footer></Footer></>
    },
    {
      path:"/shopCreate",
      element:<><Navbar></Navbar><CreateShop></CreateShop><Footer></Footer></>
    },
         {
      path:"/shop",
      element:<><ProtectedRouts allowRoles={["user"]}><Navbar></Navbar><Shop></Shop><Footer></Footer></ProtectedRouts></>
    },
           {
      path:"/login",
      element:<><Navbar></Navbar><Login></Login><Footer></Footer></>
    },
              {
      path:"/register",
      element:<><Navbar></Navbar><Regsiter></Regsiter><Footer></Footer></>
    },
  {
    path:"/test",
    element:<></>
  },

  //  my shop area
  {
    path:"/myshop",
    element:<><Navbar></Navbar><MyShope></MyShope></>
  },
    {
    path:"/myshop/details",
    element:<><Navbar></Navbar><ShopDetais></ShopDetais></>
  },
      {
    path:"/myshop/update",
    element:<><Navbar></Navbar><UpdateShop></UpdateShop></>
  },

  ])

  return (<>
  
 
<RouterProvider router={router}></RouterProvider>

  </>)
}

export default App;