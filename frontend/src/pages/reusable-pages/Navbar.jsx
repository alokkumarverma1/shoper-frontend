
import { useState } from "react";
import {FaBars,FaTimes,FaShoppingBag,FaChevronDown,FaChevronUp} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-3 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to={"/cart"} onClick={closeMenu}>
          <div className="cart relative cursor-pointer">
            <FiShoppingCart className="text-3xl ml-3 text-gray-800 hover:text-violet-600 transition" />
            <div className="count h-5 w-5 text-[12px] rounded-full -top-2 -right-4 absolute bg-violet-600 flex justify-center items-center font-semibold text-white">5</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600 mr-2">
          <Link to={"/"}><li className="hover:text-violet-600 cursor-pointer transition">Home</li></Link>
          <Link to={"/search"}><li className="hover:text-violet-600 cursor-pointer transition">Search</li></Link>
          <Link to={"/orders"}><li className="hover:text-violet-600 cursor-pointer transition">Orders</li></Link>

          <div className="relative group">
            <Link to={"/contact"}><li className="hover:text-violet-600 cursor-pointer py-3 flex items-center gap-2 transition">More <FaChevronDown className="text-xs" /></li></Link>
            <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-44 z-50">
              <ul className="rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                <Link to={"/contact"}><li className="rounded-lg px-4 py-3 text-sm hover:bg-violet-50 hover:text-violet-600 cursor-pointer transition">Contact</li></Link>
                <Link to={"/offers"}><li className="rounded-lg px-4 py-3 text-sm hover:bg-violet-50 hover:text-violet-600 cursor-pointer transition">Offers</li></Link>
                <Link to={"/aboutUs"}><li className="rounded-lg px-4 py-3 text-sm hover:bg-violet-50 hover:text-violet-600 cursor-pointer transition">About Us</li></Link>
            
              </ul>
            </div>
          </div>

          <Link to={"/login"}><button className="px-6 py-2 cursor-pointer rounded-full bg-violet-600 text-white hover:bg-violet-700 hover:shadow-md transition">Login</button></Link>
        </ul>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl mr-2 text-gray-700 hover:text-violet-600 transition">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 flex flex-col gap-4 bg-white px-6 py-5 shadow-lg">
          <Link to={"/"} onClick={closeMenu}><li className="hover:text-violet-600 cursor-pointer list-none font-medium text-gray-600">Home</li></Link>
          <Link to={"/search"} onClick={closeMenu}><li className="hover:text-violet-600 cursor-pointer list-none font-medium text-gray-600">Search</li></Link>
          <Link to={"/orders"} onClick={closeMenu}><li className="hover:text-violet-600 cursor-pointer list-none font-medium text-gray-600">Orders</li></Link>

          {/* Mobile More Dropdown */}
          <div>
            <button onClick={() => setMoreOpen(!moreOpen)} className="w-full flex items-center justify-between font-medium text-gray-600 hover:text-violet-600">
              More
              {moreOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
            </button>

            {moreOpen && (
              <div className="mt-3 ml-3 flex flex-col gap-4 border-l-2 border-violet-200 pl-4">
                <Link to={"/contact"} onClick={closeMenu}><li className="list-none text-sm text-gray-500 hover:text-violet-600">Contact</li></Link>
                <Link to={"/offers"} onClick={closeMenu}><li className="list-none text-sm text-gray-500 hover:text-violet-600">Offers</li></Link>
                 <Link to={"/aboutUs"} onClick={closeMenu}><li className="list-none text-sm text-gray-500 hover:text-violet-600">About Us</li></Link>
       
              </div>
            )}
          </div>

          <Link to={"/login"} onClick={closeMenu}><button className="w-full px-5 py-2.5 cursor-pointer rounded-full bg-violet-600 text-white hover:bg-violet-700 transition">Login</button></Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
