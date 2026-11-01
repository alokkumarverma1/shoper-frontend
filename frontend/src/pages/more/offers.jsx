
import React from "react";
import Navbar from "../reusable-pages/Navbar";
import {
  FaArrowRight,
  FaFire,
  FaClock,
  FaTag,
  FaGift,
  FaBolt,
  FaShoppingBag
} from "react-icons/fa";

function Offers() {

  const productOffers = [
    {id:1,name:"Premium Smart Watch",image:"/trending/trending-watch.jpg",oldPrice:2999,newPrice:1999,discount:33},
    {id:2,name:"Wireless Headphones",image:"/trending/trending2.jpg",oldPrice:3999,newPrice:2499,discount:38},
    {id:3,name:"Latest Smartphone",image:"/trending/trending-smartphone.jpg",oldPrice:24999,newPrice:19999,discount:20},
    {id:4,name:"Premium T-Shirt",image:"/trending/trending1.jpg",oldPrice:1499,newPrice:899,discount:40}
  ];

  const festivalOffers = [
    {id:1,name:"Diwali Special Sale",subtitle:"Celebrate the festival of lights with amazing deals.",discount:"UP TO 70% OFF",date:"Festival Special",image:"/offers/diwali.jpg",theme:"from-orange-600 to-amber-500",label:"FESTIVAL SALE"},
    {id:2,name:"Christmas Celebration",subtitle:"Spread happiness with exciting shopping deals.",discount:"UP TO 60% OFF",date:"Seasonal Special",image:"/offers/christmas.jpg",theme:"from-red-700 to-rose-500",label:"CHRISTMAS SALE"},
    {id:3,name:"New Year Mega Sale",subtitle:"Start your new year with incredible savings.",discount:"UP TO 50% OFF",date:"New Year Special",image:"/offers/newyear.jpg",theme:"from-violet-700 to-indigo-600",label:"NEW YEAR SALE"},
    {id:4,name:"Summer Shopping Sale",subtitle:"Enjoy the season with refreshing discounts.",discount:"UP TO 40% OFF",date:"Seasonal Special",image:"/offers/summer.jpg",theme:"from-cyan-600 to-blue-500",label:"SUMMER SALE"}
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#faf9ff] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <section className="py-7 text-center">
            <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">
              Amazing Deals, <span className="text-violet-600">Better Prices.</span>
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover exclusive discounts, trending products and special shopping offers.
            </p>
          </section>

          {/* Compact Hero Banner */}
          <section className="relative mt-5 overflow-hidden rounded-3xl bg-linear-to-r from-violet-700 to-violet-500 px-6 py-9 px-6 py-8 text-white shadow-lg sm:px-10 sm:py-10">

            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10"/>
            <div className="absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-white/10 blur-3xl"/>

            <div className="relative z-10 flex flex-col items-center justify-between gap-7 sm:flex-row">

              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-widest">
                  <FaFire className="text-yellow-300"/> LIMITED TIME OFFERS
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Shop More. Save More.
                  <span className="block text-yellow-300">Up to 70% OFF</span>
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-purple-100">
                  Grab your favourite products at amazing prices. Explore the latest deals before they are gone.
                </p>

                <a href="#product-offers" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-violet-700 transition hover:bg-yellow-300">
                  Explore Deals <FaArrowRight/>
                </a>
              </div>

              <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-md sm:px-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-300 text-2xl text-violet-900">
                  <FaGift/>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-purple-100">SPECIAL DISCOUNT</p>
                  <h3 className="text-4xl font-black">70%</h3>
                  <p className="text-xs font-semibold text-yellow-200">UP TO OFF</p>
                </div>
              </div>

            </div>
          </section>

          {/* Product Deals */}
          <section id="product-offers" className="mt-16 scroll-mt-28">

            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600">
                  <FaBolt/> SPECIAL PRODUCT DEALS
                </span>
                <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                  Trending <span className="text-violet-600">Offers</span>
                </h2>
                <p className="mt-2 text-sm text-gray-500">Exclusive discounts on your favourite products.</p>
              </div>

              <a href="/search" className="flex shrink-0 items-center gap-2 text-xs font-bold text-violet-600 transition hover:gap-3 sm:text-sm">
                View All <FaArrowRight/>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {productOffers.map((product) => (
                <article key={product.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-4">

                  <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-[#f7f6fa] sm:h-48">
                    <img src={product.image} alt={product.name} className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-110"/>

                    <span className="absolute left-2 top-2 rounded-lg bg-red-500 px-2.5 py-1 text-[10px] font-bold text-white">
                      {product.discount}% OFF
                    </span>
                  </div>

                  <div className="pt-3">
                    <h3 className="truncate text-sm font-bold text-gray-800 sm:text-base">{product.name}</h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-base font-black text-gray-900 sm:text-lg">₹{product.newPrice.toLocaleString("en-IN")}</span>
                      <span className="text-xs text-gray-400 line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
                    </div>

                    <p className="mt-1 text-[11px] font-semibold text-green-600">
                      Save ₹{(product.oldPrice-product.newPrice).toLocaleString("en-IN")}
                    </p>

                    <a href="/search" className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700">
                      View Product <FaArrowRight/>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Festival Deals */}
          <section className="mt-16">

            <div className="mb-7">
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-600">
                <FaGift/> SPECIAL OCCASIONS
              </span>
              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                Festival <span className="text-violet-600">& Seasonal Sales</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Celebrate every occasion with exciting shopping deals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {festivalOffers.map((festival) => (
                <article key={festival.id} className="group relative min-h-[280px] overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:shadow-xl">

                 <div className={`absolute inset-0 bg-gradient-to-r ${festival.theme} opacity-85`}/>
                  <div className="relative z-10 flex min-h-[280px] flex-col justify-between p-6 text-white sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-wider backdrop-blur-md">
                        {festival.label}
                      </span>
                      <FaGift className="text-2xl text-white/80"/>
                    </div>
                    <div className="max-w-sm">
                      <h3 className="text-2xl font-black sm:text-3xl">{festival.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/90">{festival.subtitle}</p>
                      <h4 className="mt-4 text-3xl font-black">{festival.discount}</h4>

                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <a href="/search" className="rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-gray-900 transition hover:bg-yellow-300">
                          Explore Sale <FaArrowRight className="ml-1 inline"/>
                        </a>
                        <span className="flex items-center gap-2 text-xs font-medium text-white/90">
                          <FaClock/> {festival.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm sm:flex-row sm:p-8">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-2xl text-violet-600">
                <FaShoppingBag/>
              </div>

              <div>
                <h2 className="text-lg font-black text-gray-900 sm:text-xl">
                  Ready to Find Your Next Deal?
                </h2>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Explore our latest collection and enjoy amazing savings.
                </p>
              </div>
            </div>

            <a href="/search" className="shrink-0 rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700">
              Shop Now <FaArrowRight className="ml-2 inline"/>
            </a>
          </section>

        </div>
      </main>
    </>
  );
}

export default Offers;
