
import React from "react";
import Navbar from "../reusable-pages/Navbar";
import {
  FaArrowRight,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaHeart,
  FaBullseye,
  FaRocket,
  FaCheckCircle,
  FaStar
} from "react-icons/fa";

function AboutUs() {

  const features = [
    {icon:<FaShoppingBag/>,title:"Quality Products",desc:"Explore carefully selected products at great prices."},
    {icon:<FaTruck/>,title:"Fast Delivery",desc:"Get your favourite products delivered to your doorstep."},
    {icon:<FaShieldAlt/>,title:"Secure Shopping",desc:"Enjoy a safe and reliable shopping experience."},
    {icon:<FaHeadset/>,title:"Customer Support",desc:"We are always ready to assist you whenever needed."}
  ];

  const values = [
    {icon:<FaBullseye/>,title:"Our Mission",desc:"Making online shopping simple, convenient and accessible for everyone."},
    {icon:<FaRocket/>,title:"Our Vision",desc:"Building a trusted shopping destination with a seamless customer experience."},
    {icon:<FaHeart/>,title:"Our Values",desc:"Quality, transparency, customer satisfaction and continuous improvement."}
  ];

  return (
    <>
      <Navbar/>

      <main className="min-h-screen bg-[#faf9ff] pt-24 pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-800 to-violet-500 px-6 py-9 text-white sm:px-10 sm:py-11">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-widest">
                <FaHeart className="text-pink-300"/> ABOUT OUR COMPANY
              </span>

              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Shopping Made
                <span className="text-yellow-300"> Simple & Better.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100">
                Discover a better way to shop with quality products,
                exciting deals and a customer-first experience.
              </p>

              <a href="/search" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-violet-700 transition hover:bg-yellow-300">
                Explore Collection <FaArrowRight/>
              </a>
            </div>

            <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full border-[28px] border-white/10"/>
          </section>

          {/* Introduction */}
          <section className="mt-14 grid items-center gap-8 lg:grid-cols-2">

            <div>
              <span className="text-xs font-bold tracking-widest text-violet-600">
                WHO WE ARE
              </span>

              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                More Than Just <span className="text-violet-600">Shopping.</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Welcome to our shopping destination! We are passionate about
                making online shopping convenient, enjoyable and accessible.
                Our platform brings together a wide range of products so you
                can discover everything you need in one place.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                We continuously work to improve our platform, product
                collections and customer experience to make every purchase
                simple and satisfying.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Quality Product Collection",
                  "Customer First Approach",
                  "Easy Shopping Experience",
                  "Continuous Innovation"
                ].map((item,index)=>(
                  <div key={index} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <FaCheckCircle className="shrink-0 text-violet-600"/>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-100 to-indigo-100 p-5 sm:p-7">
              <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-600">
                  <FaShoppingBag/>
                </div>

                <h3 className="mt-5 text-2xl font-black text-gray-900">
                  Your Shopping.
                  <span className="block text-violet-600">Our Priority.</span>
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Bringing convenience, quality and value together
                  to make every shopping experience better.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-violet-600">
                  <FaStar/> Customer Focused Experience
                </div>
              </div>
            </div>

          </section>

          {/* Features */}
          <section className="mt-16">

            <div className="mb-7 text-center">
              <span className="text-xs font-bold tracking-widest text-violet-600">
                WHY CHOOSE US
              </span>
              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                What Makes Us <span className="text-violet-600">Different?</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                We focus on providing a better shopping experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item,index)=>(
                <div key={index} className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-lg text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-base font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Vision Values */}
          <section className="mt-16">

            <div className="mb-7 text-center">
              <span className="text-xs font-bold tracking-widest text-violet-600">
                WHAT DRIVES US
              </span>
              <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                Our Purpose & <span className="text-violet-600">Values</span>
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {values.map((item,index)=>(
                <div key={index} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-lg text-violet-600">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm sm:flex-row sm:px-8">

            <div>
              <h2 className="text-xl font-black text-gray-900">
                Be a Part of Our Journey
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Discover new products and enjoy a better shopping experience.
              </p>
            </div>

            <a href="/search" className="shrink-0 rounded-lg bg-violet-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-violet-700">
              Start Shopping <FaArrowRight className="ml-2 inline"/>
            </a>
          </section>

        </div>
      </main>
    </>
  );
}

export default AboutUs;
