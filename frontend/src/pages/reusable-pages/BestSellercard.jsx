import React from "react";
import { FaArrowRight } from "react-icons/fa";
function BestSellerCard({ image, name = "Premium Product", price = "₹999", oldPrice = "₹1,499", rating = 4.8, count = 120, discount = 33,}) {
  return (
    <article className="group flex w-[160px] shadow shrink-0 flex-col overflow-hidden rounded-2xl border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl sm:w-[190px] md:w-[180px]">

      {/* Image */}
      <div className="relative h-45 aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full "
        />

        {/* Discount Badge */}
        <span className="absolute left-2 top-2 rounded-md bg-red-500 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
          {discount}% OFF
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-800">
          {name}
        </h3>

        {/* Rating & Reviews */}
        <div className="mt-2 flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-md bg-green-600 px-1.5 py-0.5 text-xs font-semibold text-white">
            {rating} ★
          </span>
          <span className="text-[11px] text-gray-500">
            {count.toLocaleString()} reviews
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
         <span className="text-base font-bold text-gray-900">
           {price}
        </span>

        <span className="text-xs text-gray-400 line-through">
            {oldPrice}
        </span>

        <span className="ml-auto text-lg text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-600">
        <FaArrowRight className="text-purple-600"></FaArrowRight>
        </span>
       </div>
      </div>
    </article>
  );
}

export default BestSellerCard;
