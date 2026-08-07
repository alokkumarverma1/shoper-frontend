import React from "react";
import Navbar from "../reusable-pages/Navbar";
import CartItems from "./CartItems";

function AddCart(){
    return(<>
    <Navbar></Navbar>
    <div className="add-cart gap-3 p-2 sm:p-3 xl:p-5 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <CartItems></CartItems>
     <CartItems></CartItems>
      <CartItems></CartItems>
       <CartItems></CartItems>
    </div>
    
    </>)
}

export default AddCart;