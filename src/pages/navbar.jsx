import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ home, about, contect, login }) {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar main-color h-10 w-full flex justify-between items-center fixed top-0 bg-white z-50 ">
      <div className="logo p-1 font-bold items-center h-full flex justify-center">
        <h1>Shoper</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex justify-around items-center text-[18px] w-1/2">
        <Link to={"/"}><li>Home</li></Link>
       <Link to={"/search"}><li>Search</li></Link>
       <Link to={"/shop"}><li>Shops</li></Link>
         <Link to={"/myshop"}><li>My Shop</li></Link>
       <Link><li><i className="fa-solid fa-cart-shopping text-2xl pt-3"></i></li></Link>
        <Link to={"/login"}>
        <button className="bg-white  h-9 w-20 rounded-[10px] text-balck shadow-md  hover:shadow-lg">
        Login
        </button>
        </Link>
      </ul>


{/* mobile width */}
      {/* User Icon */}
      <div
        className="user-icon h-full w-20 flex gap-5 justify-center items-center sm:hidden cursor-pointer"
      >
        <Link><i className="fa-solid text-2xl fa-cart-shopping pt-3"></i></Link>
        <i className="fa-solid fa-user text-[22px] pt-2 pr-2" onClick={toggleMenu}></i>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden absolute top-12 right-4 bg-white shadow-md rounded-md w-30 flex flex-col items-start p-2">
          <li className="w-full py-2 px-3 hover:bg-gray-100 rounded" onClick={toggleMenu}><Link to={"/"}>Home</Link></li>
          <li className="w-full py-2 px-3 hover:bg-gray-100 rounded" onClick={toggleMenu}><Link to={"/search"}>Search</Link></li>
          <li className="w-full py-2 px-3 hover:bg-gray-100 rounded" onClick={toggleMenu}><Link to={"/shop"}>Shop</Link></li>
          <li className="w-full py-2 px-3 hover:bg-gray-100 rounded" onClick={toggleMenu}><Link to={"/myshop"}>My Shop</Link></li>
       
                <li className="w-full py-2 px-3">
            <button
              className="main-color h-9 w-full rounded-[10px] button text-white"
              onClick={toggleMenu}
            >
             <Link to={"/login"}>Login</Link>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
