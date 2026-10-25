import React from "react";

 export default function NewLaunch( {img}){
    return(<>
    <div className="newlaunch h-50 min-w-50 border shadow hover:shadow-xl transition-shadow rounded-2xl   border-gray-300">
      <img className="h-full w-full rounded-2xl" src={img} alt="" />
    </div>
    </>)
}

