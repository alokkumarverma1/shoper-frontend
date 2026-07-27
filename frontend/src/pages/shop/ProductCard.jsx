import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function ProductCard() {
  return (
    <div className=" relative pb-10 p-1 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
     {/* image */}
     <div className="image relative h-28 sm:h-33 md-h-37 xl:h-43 w-full bg-red-200 rounded-2xl">
        <img src="" alt="" />
        <p className="flex absolute top-1 left-1 justify-center items-center">4.9<FaStar className="text-yellow-400 text-sm" /></p>
     </div>
     {/* data */}
     <div className="data mt-2 flex justify-between items-start">
     <h1 className="text-[14px]">best shop one the this </h1>
     </div>
     {/* pride - add */}
     <div className="price pl-2 absolute bottom-1 left-0 w-full h-10 flex justify-between items-center">
        <p className="font-semibold"> ₹ 299</p>
        <button className="bg-violet-600 mr-1 text-3xl flex justify-center items-center rounded-full h-8 w-8 text-white "><p className="mb-1">+</p></button>
     </div>
    </div>
  );
}

export default ProductCard;