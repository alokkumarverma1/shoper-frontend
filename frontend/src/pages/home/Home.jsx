import React from "react";
import Navbar from "../reusable-pages/Navbar";
import {FaStar} from "react-icons/fa6";
import BestSellerCard from "../reusable-pages/BestSellercard";
import Footer from "../reusable-pages/Footer";
import ReviewCard from "../reusable-pages/reviewCard";
import { FaBus, FaShieldAlt, FaHeadset, FaUndoAlt} from "react-icons/fa";
import ItemHeading from "../reusable-pages/itemHeading";
import { Link } from "react-router-dom";
import NewLaunch from "../reusable-pages/newLaunch";

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
  <div className="first h-50 sm:h-[80%] shadow shadow-black border border-white  w-60 z-40 bg-purple-300 rounded-2xl"><img src="hero1.jpg" className="h-full w-full rounded-2xl" alt="" /></div>
  <div className="secend h-[70%] w-60 flex flex-col gap-3 ">
   <div className="one h-30 sm:h-50 shadow shadow-black border border-white w-full rounded-2xl bg-purple-300"><img src="hero2.jpg" className="h-full w-full rounded-2xl" alt="" /></div>
   <div className="two  h-30 sm:h-50 w-full shadow shadow-black border border-white rounded-2xl bg-purple-300"><img src="hero3.jpg" className="h-full w-full rounded-2xl" alt="" /></div>
  </div>

</div>

</div>  

{/* feature section  */}
<div className="feature-section  gap-2 sm:gap-8 p-1 sm:p-5 w-full grid grid-cols-2 sm:grid-cols-4 justify-around items-center">

 <div className="fast-del shadow rounded-2xl p-2  flex justify-center items-center gap-3">
  <div className="icon border rounded-full flex justify-center items-center border-purple-600 h-9 w-9">
    <FaBus className="text-purple-500"></FaBus>
  </div>
  <div className="data">
   <h1 className="font-semibold text-[10px] sm:text-[14px]">Fast delivery</h1>
   <p className="text-[9px]">very fast delivery</p>
  </div>
 </div>

  <div className="fast-del shadow rounded-2xl p-2 flex justify-center items-center gap-3">
  <div className="icon border rounded-full flex justify-center items-center border-purple-600 h-9 w-9">
    <FaHeadset></FaHeadset>
  </div>
  <div className="data">
   <h1 className="font-semibold text-[10px] sm:text-[14px]">24/7 support</h1>
   <p className="text-[9px]">all time support </p>
  </div>
 </div>
 
  <div className="fast-del shadow rounded-2xl   py-2 px-1 flex justify-center items-center gap-3">
  <div className="icon border rounded-full flex justify-center items-center border-purple-600 h-9 w-9">
   <FaShieldAlt className="text-purple-600"></FaShieldAlt>
  </div>
  <div className="data">
   <h1 className="font-semibold text-[10px] sm:text-[14px]">Secure payment</h1>
   <p className="text-[9px]">100% secure payment</p>
  </div>
 </div>

  <div className="fast-del shadow rounded-2xl py-2 px-1  flex justify-center items-center gap-3">
  <div className="icon border rounded-full flex justify-center items-center border-purple-600 h-9 w-9">
   <FaUndoAlt className="text-purple-600"></FaUndoAlt>
  </div>
  <div className="data">
   <h1 className="font-semibold text-[10px] sm:text-[14px]">Return policy</h1>
   <p className="text-[9px]">return in 7 day</p>
  </div>
 </div>


</div>


    {/* offer and sell section   */}
    <div className="other  h-40 sm:h-50 mt-10 w-full p-3 flex  gap-2 scroll ">
      <div className="offer  rounded-2xl shadow-md min-w-full sm:min-w-[50%] h-full"><img className="h-full shadow w-full rounded-2xl" src="/banner.png" alt="" /></div>
      <div className="offer rounded-2xl shadow min-w-full sm:min-w-[50%] h-full"><img className="w-full h-full rounded-2xl shadow" src="/banner2.png" alt="" /></div>
    </div>


    {/* trending items */}
    <ItemHeading data={"Trending items"}></ItemHeading>
    <div className="trendings  w-full  flex gap-5 scroll  p-5">
    <BestSellerCard  image="/trending/trending1.jpg"  name={"girl Tshirt"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-smartphone.jpg"  name={"new smartphone"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-watch.jpg"  name={"smart watch"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-tshirt.jpg"  name={"Best tshirt"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-music.jpg"  name={"music box"} count={1000}></BestSellerCard>
     <BestSellerCard  image="/trending/trending-smartphone.jpg"  name={"new smartphone"} count={1000}></BestSellerCard>
    <BestSellerCard  image="/trending/trending-watch.jpg"  name={"smart watch"} count={1000}></BestSellerCard>
    </div>


    {/* new launch products */}
     <ItemHeading data={"New products"}></ItemHeading>
    <div className="trendings  w-full h-60  flex gap-5 scroll  p-5">
    <NewLaunch img={"/newL.png"}></NewLaunch>
    <NewLaunch img={"/newL2.png"}></NewLaunch>
    <NewLaunch img={"/newL.png"}></NewLaunch>
    <NewLaunch img={"/newL2.png"}></NewLaunch>
    <NewLaunch img={"/newL.png"}></NewLaunch>
     </div>





    {/* explore app full */}
    <div className="explore-page mt-10 mb-20 w-full h-20  flex justify-center items-center">
    <Link to={"/search"}> <button className="h-12 w-35 rounded-2xl buttonColor shadow hover:shadow-xl transition-shadow border border-white  text-white font-semibold"><p>Explore more...</p></button></Link>
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


    {/* footer */}

   <Footer></Footer>   
    
    </>)
}

export default Home;