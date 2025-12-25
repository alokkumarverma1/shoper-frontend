import React from "react";

function MyShopItem({name,details,icon}){
    return(<>
    <div className="mysopitem h-30 rounded-2xl w-60 gap-3 bg-white shape shadow-md hover:shadow-lg flex justify-center items-center">
     <div className="icon text-3xl">{icon}</div>
     <div className="details flex flex-col justify-center items-start">
        <h1 className="font-semibold text-2xl">{name}</h1>
        <p>{details}</p>
     </div>
    </div>
    </>)
}

export default MyShopItem;