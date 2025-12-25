import React, { useEffect, useState } from "react";
import MyShopItem from "./my-shop-item";
import CreateShop from "./createShop";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MyShope(){

    const navigate = useNavigate();
    const [shopDetails,setShopDetails] = useState("")

   useEffect(()=>{

    const token = localStorage.getItem("token");
    if(!token){
        navigate("/login")
    }
    const getshop = async()=>{
        try{
             const res = await axios.get("http://localhost:8080/shop/myshop",{
              headers:{Authorization:"Bearer " + token}})
              if(res.data.body === "shop not found"){
                navigate("/shopCreate")
              }
              setShopDetails(res.data.body);
        }catch(err){
            console.error(err)
        }
    }
    getshop();
   },[])

    return(<>
    <div className="myshop w-full min-h-screen">
    <div className="item-area w-full minh-12 flex flex-wrap gap-5 p-2 pt-20">
     <MyShopItem name={"New Orders"} details={"50"} icon={<i class="fa-regular fa-chart-bar"></i>}></MyShopItem>
     <MyShopItem name={"Today Earn"} details={"2450"} icon={<i class="fa-solid fa-piggy-bank"></i>}></MyShopItem>
     <MyShopItem name={"All Products"} details={"100"} icon={<i class="fa-solid fa-bars"></i>}></MyShopItem>
     <Link to={"/myshop/details"}> <MyShopItem name={"Shop Details"} details={""} icon={<i class="fa-solid fa-book"></i>}></MyShopItem></Link>
       </div>
    </div>
    </>)
}

export default MyShope;