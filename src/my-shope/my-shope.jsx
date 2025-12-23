import React from "react";
import MyShopItem from "./my-shop-item";

function MyShope(){
    return(<>
    <div className="myshop w-full min-h-screen mt-20">
    <div className="item-area w-full minh-12 flex flex-wrap gap-5 p-2">
     <MyShopItem name={"New Orders"} details={"200"}></MyShopItem>
    </div>
    </div>
    </>)
}

export default MyShope;