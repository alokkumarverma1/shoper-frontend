import React from "react";

function Heading({heading}){
    return(<>
    <div className=" w-full h-12 flex justify-center items-center">
        <h1 className="font-bold">{heading}</h1>
    </div>
    </>)
}

export default Heading;