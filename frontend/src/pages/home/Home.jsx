import React from "react";
import Navbar from "../reusable-pages/Navbar";
import {FaStar,FaRegStar,FaStarHalfStroke,} from "react-icons/fa6";
import BestSellerCard from "../reusable-pages/BestSellercard";
import Footer from "../reusable-pages/Footer";

function Home(){
    return(<>
    <Navbar></Navbar>

 {/* hero section */}
<div className="hero-section min-h-screen gap-3 sm:h-screen flex-col-reverse p-3 sm:px-10  sm:flex-row  flex items-center justify-around w-full">

  {/* left side */}
<div className="left w-full sm:pt-20  sm:w-[50%] h-full flex flex-col sm:justify-start sm:items-start">
  <h1 className="text-4xl sm:text-7xl font-black sm: leading-none text-zinc-900">SHOPER</h1>
  <h1 className="text-violet-600 text-2xl mt-3 sm:mt-5 sm:text-4xl font-bold leading-none">New faishon for new india</h1>
  <p className="sm:mt-6 mt-1 max-w-md text-[15px] sm:text-lg text-zinc-500 leading-5">Discover premium fashion curated for the modern generation.</p>

  <div className=" mt-5 sm:mt-10 flex gap-5">
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


    {/* offer and sell section   */}
    <div className="other  h-50 sm:h-70 w-full p-3  ">
     <div className="offer shadow-xl  w-full h-full bg-gray-200 rounded-2xl border border-gray-400">
    <img src="banner.jpg" className="h-full w-full rounded-2xl" alt="" />
     </div>
    </div>


    {/* trending items */}
    <div className="trendings  w-full flex gap-5 scroll mt-10 p-5">
    <BestSellerCard  image="/trending/trending1.jpg"  name={"girl Tshirt"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-smartphone.jpg"  name={"new smartphone"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-watch.jpg"  name={"smart watch"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-tshirt.jpg"  name={"Best tshirt"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-music.jpg"  name={"music box"} count={1000}></BestSellerCard>
   



    </div>

    {/* fast delivery */}
    <div className="other min-h-50  flex sm:flex-row gap-5 flex-col  justify-around items-center  w-full p-5">
      {/* left */}
     <div className="right h-full flex landscape:4 flex-col w-full sm:w-[50%] justify-center ">
      <h1 className="font-extrabold text-4xl mb-5">Fast delivery</h1>
      <p>Get your favorite products delivered quickly and safely. We ensure fast shipping, secure packaging, and real-time order tracking so your shopping experience stays smooth from checkout to delivery.</p>
     </div>
     {/* right */}
     <div className="right">
      <img src="delivery.png" alt="" className="h-60 w-80 bg-gray-400 rounded-2xl"/>
     </div>

    </div>


   
    {/* review area */}
    {/* footer */}


{/* end home page */}
 <Footer></Footer>   
    
    </>)
}

export default Home;