import React from "react";

function MyShopItem({name,details}){
    return(<>
    <div className="mysopitem h-30 rounded-2xl w-60 bg-purple-400 border flex justify-center items-center">
     <div className="icon"></div>
     <div className="details flex flex-col justify-center items-start">
        <h1 className="font-semibold text-2xl">New Orders</h1>
        <p>200</p>
     </div>
    </div>
    </>)
}

export default MyShopItem;