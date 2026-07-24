import React from "react";
import Navbar from "../reusable-pages/Navbar";
import {
  FaStar,
  FaRegStar,
  FaStarHalfStroke,
} from "react-icons/fa6";

function Home(){
    return(<>
    <Navbar></Navbar>

 {/* hero section */}
<div className="hero-section min-h-screen gap-3 sm:h-screen p-3 sm:px-10 flex-col sm:flex-row  flex items-center justify-around w-full">

  {/* left side */}
<div className="left w-full pt-15 sm:pt-20  sm:w-[50%] h-full flex flex-col justify-start items-start">
  <h1 className="text-5xl sm:text-7xl font-black mt-10 leading-none text-zinc-900">SHOPER</h1>
  <h1 className="text-violet-600 text-3xl mt-5 sm:mt-0 sm:text-4xl font-extrabold leading-none">New faishon for new india</h1>
  <p className="mt-6 max-w-md text-lg text-zinc-500 leading-5">Discover premium fashion curated for the modern generation.</p>

  <div className=" mt-10 flex gap-5">
  <button className="h-11 font-semibold text-white w-25 rounded-2xl bg-violet-500">Shop Now</button>
  <button className="h-11 font-semibold text-white w-25 rounded-2xl bg-violet-500">Explore</button>
  </div>

  <div className="h-20  rounded-2xl w-full  sm:w-[50%]  mt-10 flex gap-5">
    <div className=" flex flex-col items-center justify-center"><h1 className="font-bold text-[20px]">10K</h1><p className="text-[10px]">happy customers</p></div>
    <div className=" flex flex-col items-center justify-center"><h1 className="font-bold text-[20px]">500+</h1><p className="text-[10px]">premium product</p></div>
    <div className=" flex flex-col items-center justify-center"><h1 className="font-bold text-[20px]"><span className="flex justify-center items-center"> 4.9<FaStar className="text-yellow-400 text-xl" /></span></h1><p className="text-[10px]">review</p></div>

  </div>
</div>



  {/* RIGHT SECTION */}
<div className="right-side w-full min-h-70 sm:h-screen pt-10 gap-4 sm:w-[50%] flex justify-center items-center sm:items-center ">
  <div className="first h-50 sm:h-[80%]  w-60 z-40 bg-purple-300 rounded-2xl"><img src="hero1.jpg" className="h-full w-full rounded-2xl" alt="" /></div>
  <div className="secend h-[70%] w-60 flex flex-col gap-3 ">
   <div className="one h-30 sm:h-50 w-full rounded-2xl bg-purple-300"><img src="hero2.jpg" className="h-full w-full rounded-2xl" alt="" /></div>
   <div className="two  h-30 sm:h-50 w-full rounded-2xl bg-purple-300"><img src="hero3.jpg" className="h-full w-full rounded-2xl" alt="" /></div>
  </div>

</div>

</div>  



{/* end home page */}
    
    
    </>)
}

export default Home;