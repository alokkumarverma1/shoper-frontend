import React from "react";

export default function ItemHeading({data}){
    return(<>
    <div className="data w-full h-6 pl-2 sm:pl-5 font-semibold mt-5">
     <p>{data}</p>
    </div>
    </>)
}