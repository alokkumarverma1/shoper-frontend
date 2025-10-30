import React from "react";
import ShopItem from "./shop-item";

function Shop(){
     return(<>
    <div className="search min-h-100 w-full title border flex justify-center items-center flex-col">
    <div className="search-area h-10 w-full sm:p-10 p-1 flex justify-center items-center mt-20">
        <input placeholder="Search nearest shop" type="text" className="sm:w-1/2 text-black p-2 secend h-9 rounded-[10px] w-[90%] shadow-lg" />

    </div>
    <div className="data-area w-full min-h-screen flex flex-wrap gap-15 justify-start pt-10 sm:p-10 p-2 mb-20">
     <ShopItem></ShopItem>
       <ShopItem></ShopItem>
         <ShopItem></ShopItem>
           <ShopItem></ShopItem> 
             <ShopItem></ShopItem>
               <ShopItem></ShopItem>
                 <ShopItem></ShopItem>
                   <ShopItem></ShopItem>

    </div>
    </div>
    </>)
}

export default Shop;