import React from "react";
import SearchItem from "./search-list-item";
import ItemCard from "./item-card";


function Search(){
    return(<>
    <div className="search min-h-100 w-full title border flex justify-center items-center flex-col">
    <div className="search-area h-20 w-full sm:p-10 p-1 flex justify-center items-center mt-20">
        <input placeholder="Search your items" type="text" className="sm:w-1/2 text-black p-2 secend h-9 rounded-[10px] w-[80%] shadow-lg" />
    </div>
    <div className="items-lists w-full h-12 p-1 flex gap-3 justify-start overflow-auto">
         <SearchItem name={"Phone"} />
          <SearchItem name={"Watch"} />
          <SearchItem name={"Clothes"} />
          <SearchItem name={"Electronics"} />
          <SearchItem name={"Trending"} />
          <SearchItem name={"Smartphone"} />
          <SearchItem name={"Shoes"} />
          <SearchItem name={"Laptops"} />
          <SearchItem name={"Accessories"} />
          <SearchItem name={"Home Decor"} />
    </div>
    <div className="data-area w-full min-h-screen sm:p-10 p-5 flex sm:gap-10  justify-srart flex-wrap">
    <ItemCard></ItemCard>
      <ItemCard></ItemCard>
        <ItemCard></ItemCard>
    </div>
    </div>
    </>)
}

export default Search;