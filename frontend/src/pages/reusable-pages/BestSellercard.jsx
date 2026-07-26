import React from "react";

function BestSellerCard({image, count , name}){
    return(<>
    <div className="bestseller relative overflow-hidden h-85 min-w-55 rounded-2xl flex flex-col justify-center items-center shadow-md border-gray-300">
     <img src={image} alt="" className="h-55 rounded-2xl w-[90%] bg-gray-100 mt-2" />
     <p>{name}</p>
     <div className="data flex justify-center items-center flex-col mt-3">
        <h1 className="font-bold">{count}+</h1>
        <p className="text-[13px]">Order last week</p>
     </div>
    <div className="top absolute top-0 left-0 bg-red-600 h-5 w-20 rounded-br-3xl flex justify-center items-center"><h1 className="text-white font-semibold text-[13px]">Trending</h1></div>
    </div>

    
    </>)
}

export default BestSellerCard;