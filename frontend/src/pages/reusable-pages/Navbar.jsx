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
        <div className="cart  relative ">
          <FiShoppingCart className="text-3xl ml-3"></FiShoppingCart>
          <div className="count h-5 w-5 text-[12px] rounded-full -top-2 -right-4 absolute bg-red-500 flex justify-center items-center font-semibold text-white">5</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link to={"/"}><li className="hover:text-violet-600 cursor-pointer">Home</li></Link>
          <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer">Search</li></Link>
          <Link to={"/orders"}><li className="hover:text-violet-600 cursor-pointer">Orders</li></Link>
          <Link to={"/contact"}><li className="hover:text-violet-600 cursor-pointer">More</li></Link>
          <Link to={"/cart"}><li className="hover:text-violet-600 cursor-pointer">Carts</li></Link>
         <Link to={"/singIn"}> <button className="px-5 py-2 cursor-pointer rounded-full bg-violet-600 text-white hover:bg-violet-700 transition">
            Sign In
          </button>
        </Link>
        </ul>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t flex flex-col gap-1 bg-white px-6 py-4 space-y-4">
           <Link to={"/"}><li className="hover:text-violet-600 cursor-pointer list-none">Home</li></Link>
          <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer list-none">Search</li></Link>
           <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer list-none">Car</li></Link>
          <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer list-none">More</li></Link>
      
          <Link to={"/singIn"}> <button className="px-5 py-2 cursor-pointer rounded-full bg-violet-600 text-white hover:bg-violet-700 transition">
            Sign In
          </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;