import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingBag,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-13 pr-3 sm:6 flex items-center justify-between">

        {/* Logo */}
         <div className="flex font-bold justify-between items-center ">
          <img src="logo.png" className="h-13 w-13" alt="" />
         <span>Shoper</span>
         </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <li><a href="#" className="hover:text-violet-600">Home</a></li>
          <li><a href="#" className="hover:text-violet-600">Shop</a></li>
          <li><a href="#" className="hover:text-violet-600">Categories</a></li>
          <li><a href="#" className="hover:text-violet-600">Contact</a></li>

          <button className="px-5 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition">
            Sign In
          </button>
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Shop</a>
          <a href="#" className="block">Categories</a>
          <a href="#" className="block">Contact</a>

          <button className="w-full py-2 rounded-lg bg-violet-600 text-white">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;