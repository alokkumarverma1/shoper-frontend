import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import Navbar from "../reusable-pages/Navbar";

function CartProuct() {
    const [quantity, setQuantity] = React.useState(1);

    const product = {
        name: "Apple iPhone 16 Pro Max",
        price: 129999,
        originalPrice: 139999,
        image: "https://picsum.photos/300/300?random=1",
        color: "Black Titanium",
        storage: "256 GB",
        details:"this is one of the best smartphone on this time in market. with advance featur and design is attractive "
    };

    return (
        <>
            <Navbar />
        <div className="cart-product p-3 transition  relative shadow-md hover:shadow-xl rounded-2xl">
         
        <div className="flex gap-2">
             <div className="left h-20 w-25 rounded-2xl">
          <img src={product.image} alt="" className="w-full h-full rounded-2xl" />
         </div>

         <div className="right">
         <p className=" text-[13px] mr-3 sm:text-[20px] font-bold">{product.name}</p>
         <p className="flex gap-2 text-[10px]"><span>{product.storage}</span><span>{product.color}</span></p>
         <p className="flex gap-2 text-[13px] font-semibold mt-1"><span>₹{product.price}</span><span className="line-through text-gray-500">{product.originalPrice}</span></p>
         <p className="text-[13px] hidden sm:block">{product.details}</p>
         </div>
        </div>
        <p className="text-[13px]  sm:hidden">{product.details}</p>

        <div className="delete--tem absolute top-2 right-2 text-violet-600">
         <FaTrash></FaTrash>
        </div>

        </div>
        </>
    );
}

export default CartProuct;