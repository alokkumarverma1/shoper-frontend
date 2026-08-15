import React from "react";
import Navbar from "../reusable-pages/Navbar";
import CartProuct from "./CartProduct";

function Cart(){
    return(<>
    <Navbar></Navbar>
    <div className="cart pt-20 flex gap-4 flex-col p-3">
    <CartProuct></CartProuct>
    <CartProuct></CartProuct>



    </div>
    
    </>)
}

export default Cart;