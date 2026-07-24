import React from "react";

function Heading({heading}){
    return(<>
    <div className=" w-full h-20 border">
        <h1 className="font-bold">{heading}</h1>
    </div>
    </>)
}