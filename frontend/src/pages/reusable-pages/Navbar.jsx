import { useState } from "react";
import {FaBars,FaTimes,FaShoppingBag,} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";



function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl  mx-auto h-13 pr-3 sm:6 flex items-center justify-between">

        {/* Logo */}
       <Link to={"/cart"}>
        <div className="cart  relative ">
          <FiShoppingCart className="text-3xl ml-3"></FiShoppingCart>
          <div className="count h-5 w-5 text-[12px] rounded-full -top-2 -right-4 absolute bg-red-500 flex justify-center items-center font-semibold text-white">5</div>
        </div>
       </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600 mr-2">
          <Link to={"/"}><li className="hover:text-violet-600 cursor-pointer">Home</li></Link>
          <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer">Search</li></Link>
          <Link to={"/orders"}><li className="hover:text-violet-600 cursor-pointer">Orders</li></Link>
          <Link to={"/contact"}><li className="hover:text-violet-600 cursor-pointer">More</li></Link>
         <Link to={"/login"}> <button className="px-5 py-2 cursor-pointer rounded-full bg-violet-600 text-white hover:bg-violet-700 transition">
            Login
          </button>
        </Link>
        </ul>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-2xl mr-2"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t flex flex-col gap-1 bg-white px-6 py-4 space-y-4">
           <Link to={"/"}><li className="hover:text-violet-600 cursor-pointer list-none">Home</li></Link>
          <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer list-none">Search</li></Link>
           <Link to={"/orders"}><li className="hover:text-violet-600 cursor-pointer list-none">Orders</li></Link>
          <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer list-none">More</li></Link>
      
          <Link to={"/login"}> <button className="px-5 py-2 cursor-pointer rounded-full bg-violet-600 text-white hover:bg-violet-700 transition">
            Login
          </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;