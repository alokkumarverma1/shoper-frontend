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
      path:"/shop",
      element:<><Navbar></Navbar><Shop></Shop><Footer></Footer></>
    },
           {
      path:"/login",
      element:<><Navbar></Navbar><Login></Login><Footer></Footer></>
    },
              {
      path:"/register",
      element:<><Navbar></Navbar><Regsiter></Regsiter><Footer></Footer></>
    },

  ])

  return (<>
  
 
<RouterProvider router={router}></RouterProvider>

  </>)
}

export default App;