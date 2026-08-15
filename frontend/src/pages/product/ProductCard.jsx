import React from "react";
import { Link} from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";

function ProductCard({ product = {}, onAddToCart }) {

  const {
    id = 1,
    name = "Apple iPhone 16 Pro Max",
    image = "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    price = 129999,
    originalPrice = 139999,
    discount = 7,
    details="256Gb , balck color",
    rating = 4.8,
    reviewCount = 2456,
    stock = true,
  } = product;



  return (
    <>
    <Link to={"/productDetails"}>
    <div  className="group w-full  rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-xl transition-all cursor-pointer">
      {/* Image & Discount Badge */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
        {discount > 0 && (
          <span className="absolute top-2 left-2 z-10 rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
            {discount}% OFF
          </span>
        )}
        <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"/>
      </div>

      {/* Details */}
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            {rating} <FaStar className="text-[10px]" />
          </span>
          <span className="text-slate-400">({reviewCount.toLocaleString("en-IN")})</span>
        </div>

        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-snug group-hover:text-violet-600 transition-colors">
          {name}
        </h3>
        <div className="details text-[12px]">
          <p>256 GB ,BlackDimond</p>
        </div>

        <div className="flex gap-2 items-center relative ">
          <span className="text-lg font-black text-slate-900">
            ₹{price.toLocaleString("en-IN")}
          </span>
          {originalPrice && (
            <span className="text-xs text-slate-400 line-through">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}
          <div className="data h-10 w-10  flex justify-center absolute bottom-0 right-0 items-center text-white font-semibold bg-violet-600 text-3xl pb-1 rounded-full">+</div>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
}

export default ProductCard;