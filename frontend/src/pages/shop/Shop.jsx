import React from "react";
import Navbar from "../reusable-pages/Navbar";
import { IoSearch } from "react-icons/io5";
import Category from "../reusable-pages/Category";
import ProductCard from "../product/ProductCard";
import { FaTshirt, FaMobileAlt,FaLaptop,FaCouch, FaGamepad, FaClock,} from "react-icons/fa";
import { GiRunningShoe, GiLipstick,} from "react-icons/gi";
import Heading from "../reusable-pages/Heading";



function Shop(){

 const categories = [
  {
    id: 1,
    name: "Fashion",
    icon: FaTshirt,
  },
  {
    id: 2,
    name: "Mobiles",
    icon: FaMobileAlt,
  },
  {
    id: 3,
    name: "Laptop",
    icon: FaLaptop,
  },
  {
    id: 4,
    name: "Shoes",
    icon: GiRunningShoe,
  },
  {
    id: 5,
    name: "Beauty",
    icon: GiLipstick,
  },
  {
    id: 6,
    name: "Furniture",
    icon: FaCouch,
  },
  {
    id: 7,
    name: "Gaming",
    icon: FaGamepad,
  },
  {
    id: 8,
    name: "Watches",
    icon: FaClock,
  },
];







    return(<>
    <Navbar></Navbar>
    <div className="shop mt-17">

        {/*search area  */}
        <div className="search-area h-10 relative full flex justify-center items-center">
            <div className=" flex w-[80%] relative">
                  <IoSearch className="text-2xl text-gray-500 absolute top-2 left-2"/>
                  <input type="text" placeholder="Search..."  className="border w-full border-gray-300 rounded-2xl shadow shadow-violet-300 pl-10 py-2 outline-none focus:border-violet-600"/>
            </div>
        </div>

        {/*important categery */}
        <div className="category min-h-15 mb-5 w-full flex  scroll mt-5">
          {categories.map((item) => (<Category key={item.id} name={item.name} Icon={item.icon}/>))}
        </div>
     

        {/* all product */}
<div className="all-product grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 min-h-screen mt-10">
  <ProductCard></ProductCard>
   <ProductCard></ProductCard>
    <ProductCard></ProductCard>
     <ProductCard></ProductCard>
      <ProductCard></ProductCard>
       <ProductCard></ProductCard>
        <ProductCard></ProductCard>
</div>




    </div>
    
    </>)
}

export default Shop;