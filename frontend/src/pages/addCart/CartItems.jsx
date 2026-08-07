import React from "react";
import { FaStar } from "react-icons/fa";

function CartItems(){
    return(<>
    <div className="cart-items flex gap-3 shadow-md hover:shadow-xl p-2 min-h-30 max-h-40 rounded-2xl ">
     <div className="img-area h-full min-w-27 max-w-30 bg-gray-300 rounded-2xl">

     </div>
     <div className="data w-full h-full">
        <p className="name text-sm leading-5">Vivo T4x 5g smartphone</p>

        <div className="extra h-14 border mt-1">

        </div>

        <div className="price-rateing flex justify-between w-full">
             <p className="font-semibold"> ₹ 299</p>
             <p className="flex  justify-center items-center">4.9<FaStar className="text-yellow-400 text-sm" /></p>
        </div>
        
     </div>
     

    </div>
    </>)
}

export default CartItems;