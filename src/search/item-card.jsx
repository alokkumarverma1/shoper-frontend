import React from "react";

function ItemCard(){
    return(<>
    <div className="item-card sm:w-50 w-full h-50 rounded-[10px]  title shadow-lg">
      <div className="item-img h-[70%]">
       <img src="" alt="" />
      </div>
      <div className="item-data p-2 text-black">
       <p>Realme next r1</p>
       <div className="flex justify-between">
        <p className="font-semibold">400</p>
        <p className="font-semibold">4.5</p>
       </div>
      </div>
    </div>
    
    </>)
}

export default ItemCard;