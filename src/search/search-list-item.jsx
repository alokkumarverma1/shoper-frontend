import React from "react";

function SearchItem({name}){
    return(<>
    <div className="search-item h-10 min-w-30 max-w-70 rounded-[15px] button text-white flex justify-center items-center p-2">
    {name}
    </div>
    </>)
}

export default SearchItem;