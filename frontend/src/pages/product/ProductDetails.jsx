import React from "react";
import { FaStar, FaShoppingCart, FaBolt, FaHeart, FaMapMarkerAlt, FaTag, FaTruck } from "react-icons/fa";
import Navbar from "../reusable-pages/Navbar";

function ProductDetails() {
    const product = {
        id: 1,
        name: "Apple iPhone 16 Pro Max",
        price: 129999,
        originalPrice: 139999,
        discount: 7,
        rating: 4.8,
        reviews: 2456,
        stock: true,
        brand: "Apple",
        storage: "256 GB",
        color: "Black Titanium",
        warranty: "1 Year",
        description: "Experience powerful performance with the A18 Pro chip, advanced camera system and premium titanium design.",
        image: "https://picsum.photos/700/700?random=1"
    };

    const [quantity, setQuantity] = React.useState(1);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-slate-50 py-5 sm:py-8">
                <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="grid lg:grid-cols-[46%_54%]">

                            <div className="border-b border-slate-200 bg-slate-50 p-4 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">

                                <div className="relative flex h-[350px] items-center justify-center overflow-hidden rounded-2xl bg-white sm:h-[470px]">
                                   <img src={product.image} alt={product.name} className="h-full w-full object-contain p-8 sm:p-12" />
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-violet-600 bg-white py-3.5 text-sm font-bold text-violet-600 transition hover:bg-violet-50">
                                        <FaShoppingCart />
                                        ADD TO CART
                                    </button>

                                    <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white shadow-md shadow-violet-500/20 transition hover:bg-violet-700">
                                        <FaBolt />
                                        BUY NOW
                                    </button>
                                </div>

                            </div>

                            <div className="p-5 sm:p-7 lg:p-9">

                                <div className="flex items-center justify-between gap-4">
                                    <span className="rounded-md bg-violet-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-600">
                                        {product.brand}
                                    </span>

                                    <span className={`flex items-center gap-2 text-xs font-semibold ${product.stock ? "text-green-600" : "text-red-500"}`}>
                                        <span className={`h-2 w-2 rounded-full ${product.stock ? "bg-green-500" : "bg-red-500"}`}></span>
                                        {product.stock ? "In Stock" : "Out of Stock"}
                                    </span>
                                </div>

                                <h1 className="mt-5 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                                    {product.name}
                                </h1>

                                <div className="mt-4 flex flex-wrap items-center gap-3">
                                    <span className="flex items-center gap-1.5 rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white">
                                        {product.rating}
                                        <FaStar size={10} />
                                    </span>

                                    <span className="text-sm text-slate-500">
                                        {product.reviews.toLocaleString()} Ratings & Reviews
                                    </span>
                                </div>

                                <div className="my-6 h-px bg-slate-100"></div>

                                <div className="flex flex-wrap items-baseline gap-3">
                                    <span className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                        ₹{product.price.toLocaleString()}
                                    </span>

                                    <span className="text-base text-slate-400 line-through">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>

                                    <span className="text-sm font-bold text-green-600">
                                        {product.discount}% off
                                    </span>
                                </div>

                                <p className="mt-1 text-xs text-slate-400">
                                    Inclusive of all taxes
                                </p>

                                <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
                                    <p className="text-sm leading-6 text-slate-600">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <p className="mb-3 text-sm font-semibold text-slate-800">
                                        Available Offers
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 text-sm text-slate-600">
                                            <FaTag className="mt-1 shrink-0 text-violet-500" />
                                            <span>
                                                <b className="text-slate-800">Bank Offer</b> 5% cashback on selected bank cards.
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3 text-sm text-slate-600">
                                            <FaTag className="mt-1 shrink-0 text-violet-500" />
                                            <span>
                                                <b className="text-slate-800">Special Price</b> Get extra discount on this product.
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3 text-sm text-slate-600">
                                            <FaTag className="mt-1 shrink-0 text-violet-500" />
                                            <span>
                                                <b className="text-slate-800">No Cost EMI</b> Available on eligible cards.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-6 h-px bg-slate-100"></div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                                    <span className="pt-2 text-sm font-semibold text-slate-700">
                                        Delivery
                                    </span>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100">
                                            <FaMapMarkerAlt className="shrink-0 text-violet-500" />

                                            <input type="text" placeholder="Enter delivery pincode" className="min-w-0 flex-1 text-sm text-slate-700 outline-none" />

                                            <button className="text-sm font-bold text-violet-600 transition hover:text-violet-700">
                                                Check
                                            </button>
                                        </div>

                                        <p className="mt-2 text-xs text-slate-400">
                                            Enter pincode to check delivery availability
                                        </p>
                                    </div>
                                </div>

                                <div className="my-6 h-px bg-slate-100"></div>

                               <div className="mt-6 flex items-center gap-4">
                                    <span className="text-sm font-semibold text-slate-700">
                                        Quantity
                                    </span>

                                    <div className="flex h-10 overflow-hidden rounded-lg border border-slate-200">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
                                            −
                                        </button>

                                        <span className="flex w-11 items-center justify-center border-x border-slate-200 text-sm font-semibold text-slate-800">
                                            {quantity}
                                        </span>

                                        <button onClick={() => setQuantity(quantity + 1)} className="w-10 text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-7 grid grid-cols-2 gap-3 border-t border-slate-100 pt-6">

                                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                                        <FaTruck className="shrink-0 text-lg text-violet-500" />

                                        <div>
                                            <p className="text-xs font-semibold text-slate-700">
                                                Free Delivery
                                            </p>

                                            <p className="mt-0.5 text-[11px] text-slate-400">
                                                Fast delivery available
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                                        <FaTag className="shrink-0 text-lg text-violet-500" />

                                        <div>
                                            <p className="text-xs font-semibold text-slate-700">
                                                1 Year Warranty
                                            </p>

                                            <p className="mt-0.5 text-[11px] text-slate-400">
                                                {product.warranty} manufacturer warranty
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                        <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
                            <h2 className="text-xl font-bold text-slate-900">
                                Product Details
                            </h2>
                        </div>

                        <div className="p-5 sm:p-7">

                            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                                Specifications
                            </h3>

                            <div className="overflow-hidden rounded-xl border border-slate-200">

                                <div className="grid sm:grid-cols-2">

                                    <div className="flex justify-between border-b border-slate-200 bg-slate-50 px-4 py-3.5 text-sm sm:border-r">
                                        <span className="text-slate-500">
                                            Brand
                                        </span>

                                        <span className="font-semibold text-slate-800">
                                            {product.brand}
                                        </span>
                                    </div>

                                    <div className="flex justify-between border-b border-slate-200 bg-slate-50 px-4 py-3.5 text-sm">
                                        <span className="text-slate-500">
                                            Storage
                                        </span>

                                        <span className="font-semibold text-slate-800">
                                            {product.storage}
                                        </span>
                                    </div>

                                    <div className="flex justify-between border-b border-slate-200 px-4 py-3.5 text-sm sm:border-r">
                                        <span className="text-slate-500">
                                            Color
                                        </span>

                                        <span className="font-semibold text-slate-800">
                                            {product.color}
                                        </span>
                                    </div>

                                    <div className="flex justify-between px-4 py-3.5 text-sm">
                                        <span className="text-slate-500">
                                            Warranty
                                        </span>

                                        <span className="font-semibold text-slate-800">
                                            {product.warranty}
                                        </span>
                                    </div>

                                </div>

                            </div>

                            <h3 className="mb-3 mt-7 text-sm font-bold uppercase tracking-wider text-slate-500">
                                Description
                            </h3>

                            <p className="max-w-5xl text-sm leading-7 text-slate-600">
                                {product.description}
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductDetails;