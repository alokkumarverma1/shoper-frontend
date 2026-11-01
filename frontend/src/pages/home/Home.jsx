
import React, { useEffect } from "react";
import Navbar from "../reusable-pages/Navbar";
import {  FaStar,  FaBus,  FaShieldAlt,  FaHeadset,  FaUndoAlt, FaArrowRight} from "react-icons/fa";
import BestSellerCard from "../reusable-pages/BestSellercard";
import Footer from "../reusable-pages/Footer";
import ReviewCard from "../reusable-pages/reviewCard";
import ItemHeading from "../reusable-pages/itemHeading";
import { Link } from "react-router-dom";
import NewLaunch from "../reusable-pages/newLaunch";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 70,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden  text-zinc-900">
      <Navbar />
     {/* hero section  */}
      <section className="relative isolate overflow-hidden">
        {/* Background */}
     
        <div className="mx-auto bg-green-40 grid min-h-[630px] max-w-[1500px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-10 lg:grid-cols-[0.85fr_1.3fr_0.85fr] lg:gap-7 lg:px-14 lg:py-12">
          {/* LEFT IMAGE */}
          <div className="order-2 hidden sm:block  mx-auto w-full max-w-[320px] lg:order-1 lg:max-w-none">
            <div data-aos="fade-right" className="relative h-[350px] overflow-hidden rounded-[100px_20px_100px_20px] border-[6px] border-white shadow-2xl shadow-purple-300 sm:h-[440px]">
              <img
                src="/hero1.jpg"
                alt="Fashion collection"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"/>
              <div className="absolute bottom-5 left-4 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-sm font-bold text-violet-700"> Premium Collection  </p>
                <p className="text-xs text-zinc-500"> Explore your style </p>
              </div>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="order-1 flex flex-col items-center text-center lg:order-2">
            <h1 data-aos="zoom-in"
              className="mt-7 text-6xl font-black tracking-tighter text-zinc-900 sm:text-7xl lg:text-8xl">
              SHOPER<span className="text-violet-600">.</span>
            </h1>

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-4 text-3xl font-extrabold leading-tight text-violet-600 sm:text-4xl">
              New Fashion
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="mt-5 max-w-sm text-sm leading-7 text-zinc-500 sm:text-base" >
              Discover premium fashion curated for the modern generation.
              Upgrade your style and express your personality.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="mt-7 flex flex-wrap justify-center gap-4">
              <Link to="/search">
                <button className="group flex items-center gap-3 rounded-full bg-linear-to-r from-violet-600 to-purple-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-purple-300/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  Shop Now
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Statistics */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="mt-5 flex w-full items-center justify-center gap-5 rounded-2xl border border-white bg-white/60 px-4 py-2 shadow-lg shadow-purple-100 backdrop-blur-md sm:gap-7">
              <div>
                <h3 className="text-xl font-black">10K+</h3>
                <p className="text-[10px] text-zinc-500 sm:text-xs">
                  Customers
                </p>
              </div>

              <div className="h-9 w-px bg-purple-200" />
              <div>
                <h3 className="text-xl font-black">500+</h3>
                <p className="text-[10px] text-zinc-500 sm:text-xs">
                  Products
                </p>
              </div>

              <div className="h-9 w-px bg-purple-200" />

              <div>
                <h3 className="flex items-center justify-center gap-1 text-xl font-black">
                  4.9 <FaStar className="text-yellow-400" />
                </h3>
                <p className="text-[10px] text-zinc-500 sm:text-xs">
                  Rating
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="order-3 hidden mx-auto sm:flex w-full max-w-[320px] flex-col gap-5 lg:max-w-none">

            <div data-aos="fade-left"
              data-aos-delay="200"
              className="h-[170px]  overflow-hidden rounded-[20px_100px_20px_100px] border-[6px] border-white shadow-2xl shadow-purple-200 sm:h-[200px]">
              <img
                src="/hero2.jpg"
                alt="Latest fashion"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="h-[210px] overflow-hidden rounded-[100px_20px_100px_20px] border-[6px] border-white shadow-2xl shadow-purple-200 sm:h-[200px]"
            >
              <img
                src="/hero3.jpg"
                alt="Modern fashion"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}

      <section className="mx-auto max-w-[1500px] px-4 py-10 sm:px-10">

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">

          {[
            {
              icon: <FaBus />,
              title: "Fast Delivery",
              desc: "Quick doorstep delivery",
            },
            {
              icon: <FaHeadset />,
              title: "24/7 Support",
              desc: "We're always here",
            },
            {
              icon: <FaShieldAlt />,
              title: "Secure Payment",
              desc: "Safe transactions",
            },
            {
              icon: <FaUndoAlt />,
              title: "Easy Returns",
              desc: "7-day return policy",
            },
          ].map((item, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100 sm:gap-4 sm:p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-lg text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xs font-bold sm:text-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-[9px] text-zinc-500 sm:text-xs">
                  {item.desc}
                </p>
              </div>

            </div>

          ))}

        </div>
      </section>


      {/* ================= OFFER BANNERS ================= */}

      <section className="mx-auto max-w-[1500px] px-4 py-8 sm:px-10">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-violet-600">
              SPECIAL OFFERS
            </p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">
              Offers Just For You
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div
            data-aos="fade-right"
            className="group h-44 overflow-hidden rounded-3xl shadow-md sm:h-60"
          >
            <img
              src="/banner.png"
              alt="Special offer"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div
            data-aos="fade-left"
            className="group h-44 overflow-hidden rounded-3xl shadow-md sm:h-60"
          >
            <img
              src="/banner2.png"
              alt="Fashion sale"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </section>


      {/* ================= TRENDING SECTION ================= */}

      <section className="mt-2 bg-[#faf7ff]">
        <div className="mx-auto max-w-[1500px]">
          <ItemHeading data={"Trending Items"} />
          <div className="flex gap-5 overflow-x-auto px-5 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <BestSellerCard image="/trending/trending1.jpg" name="Girl Tshirt" count={1000} />
            <BestSellerCard image="/trending/trending-smartphone.jpg" name="New Smartphone" count={1000} />
            <BestSellerCard image="/trending/trending-watch.jpg" name="Smart Watch" count={1000} />
            <BestSellerCard image="/trending/trending-tshirt.jpg" name="Best Tshirt" count={1000} />
            <BestSellerCard image="/trending/trending-music.jpg" name="Music Box" count={1000} />
            <BestSellerCard image="/trending/trending-smartphone.jpg" name="New Smartphone" count={1000} />
            <BestSellerCard image="/trending/trending-watch.jpg" name="Smart Watch" count={1000} />
          </div>
        </div>
      </section>


      {/* ================= NEW LAUNCH SECTION ================= */}

      <section className="mx-auto max-w-[1500px] py-5 sm:py-5 ">
        <ItemHeading data={"New Arrivals"} />
        <div className="flex h-64 gap-5 overflow-x-auto px-5 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <NewLaunch img="/newL.png" />
          <NewLaunch img="/newL2.png" />
          <NewLaunch img="/newL.png" />
          <NewLaunch img="/newL2.png" />
          <NewLaunch img="/newL.png" />
        </div>
      </section>

      {/* ================= EXPLORE SECTION ================= */}

      <section className="mx-4 mb-16 overflow-hidden rounded-3xl bg-linear-to-r from-violet-700 to-violet-500  text-center shadow-xl shadow-purple-200 sm:mx-10 sm:py-16">
        <div data-aos="zoom-in">

          <p className="text-xs font-bold tracking-[3px] text-purple-200">
            DISCOVER MORE
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Find Your Perfect Style
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-purple-100 sm:text-base">
            Explore our latest collection and discover products
            that match your personality.
          </p>

          <Link to="/search">
            <button className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 font-bold text-violet-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-purple-50">
              Explore More
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>
          </Link>

        </div>

      </section>


      {/* review */}
      <section className="bg-[#faf7ff] py-10 sm:py-14">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-5 px-5">
            <p className="text-xs font-bold tracking-widest text-violet-600">
              CUSTOMER FEEDBACK
            </p>
          </div>
          {/* Review Area */}
<ItemHeading data={"Reviews"}></ItemHeading>
<div className="review flex gap-3 overflow-x-auto snap-x snap-mandatory p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
  <ReviewCard
    name="Alok Kumar Verma"
    review="Great product quality and excellent service."
  />
  <ReviewCard
    name="Rahul Sharma"
    review="Amazing experience. The product was worth the price."
  />
  <ReviewCard
    name="Priya Singh"
    review="Very good quality and a smooth shopping experience."
  />
  <ReviewCard
    name="Aman Gupta"
    review="Loved the product. Would definitely recommend it."
  />
</div>
          

        

        </div>
      </section>


    {/* footer */}
      <Footer />

    </div>
  );
}

export default Home;
