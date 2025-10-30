import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ home, about, contect, login }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar main-color h-12 w-full flex justify-between items-center fixed top-0 bg-white z-50 px-4">
      {/* Logo */}
      <div className="logo flex font-bold items-center">
        <h1>Shoper</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex justify-around items-center text-[18px] w-1/2">
        <Link to={"/"}><li>Home</li></Link>
       <Link to={"/search"}><li>Search</li></Link>
       <Link to={"/shop"}><li>Shops</li></Link>
        <Link to={"/login"}>
        <button className="bg-white  h-9 w-20 rounded-[10px] text-balck shadow-md  hover:shadow-lg">
        Login
        </button>
        </Link>
      </ul>

      {/* User Icon */}
      <div
        className="user-icon h-full w-10 flex justify-center items-center sm:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <i className="fa-solid fa-user text-[20px]"></i>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden absolute top-12 right-4 bg-white shadow-md rounded-md w-30 flex flex-col items-start p-2">
          <li className="w-full py-2 px-3 hover:bg-gray-100 rounded" onClick={toggleMenu}>Home</li>
          <li className="w-full py-2 px-3 hover:bg-gray-100 rounded" onClick={toggleMenu}>Search</li>
          <li className="w-full py-2 px-3 hover:bg-gray-100 rounded" onClick={toggleMenu}>Contect</li>
          <li className="w-full py-2 px-3">
            <button
              className="main-color h-9 w-full rounded-[10px] button text-white"
              onClick={toggleMenu}
            >
              Login
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
