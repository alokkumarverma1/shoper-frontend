import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../pages/footer";
import { Link } from "react-router-dom";




function ShopDetais() {

    const [shop, setShop] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        const fetchShop = async () => {
            try {
                const res = await axios.get("http://localhost:8080/shop/myshop", {
                    headers: { Authorization: "Bearer " + token }
                });
              
                setShop(res.data.body);
                setLoading(false);

            } catch (err) {
                console.error(err);
                // handle 403/401
                if (err.response && (err.response.status === 403 || err.response.status === 401)) {
                    navigate("/login");
                }
            }
        }
        fetchShop();
    }, [navigate]);

        const deleteAcount = async()=>{
              const token = localStorage.getItem("token");
           
            try{
                 const res = await axios.get("http://localhost:8080/shop/delete",{
                headers:{Authorization:"Bearer " + (token)}});
                console.log(res.data)
                if(res.data.body === "acount delete sucess"){
                   navigate("/")
                }
            }catch(err){
                console.error(err);
            }
        }

        

    if (loading) {
        return <div className="p-4 text-center text-gray-500">Loading shop details...</div>
    }

    return(<>
    <div className="shop-details min-h-13 w-full pt-30 mb-30">

 <div className="data m-5 bg-white p-5 shadow-md hover:shadow-lg rounded-2xl h-90">

 <div className="image h-1 flex justify-center items-end">
    <div className="circule h-30 w-30 rounded-full  bg-white shadow-md hover:shadow-lg"></div>
</div>  
<div className="data w-full flex justify-center font-bold text-3xl mb-10"><h1>{shop.shopName}</h1></div>     
<div className=" w-full flex flex-col gap-3">
 <div className=""><p><i class="fa-solid fa-phone"></i>  {shop.number}</p></div>
 <div className=""><p><i class="fa-solid fa-envelope"></i>  {shop.email}</p></div>
 <div className=""><p><i class="fa-solid fa-location-dot"></i>  {shop.city}</p></div>
 
</div>
   </div>

    <div className="extra w-full min-h-20 flex justify-center items-center gap-5 flex-wrap">
      <Link to={"/myshop/update"}>  <button className="h-12 w-40 bg-white rounded-2xl mybg shadow-md hover:shadow-lg transition-all"><i class="fa-solid fa-pen"></i>  Update</button></Link>
     <button className="h-12 w-40 bg-white shadow-md hover:shadow-lg transition-all rounded-2xl mybg"  onClick={deleteAcount}> <i class="fa-solid fa-trash"></i>  Delete</button>

    </div>
    </div>
    <Footer></Footer>
    
    </>)
}

export default ShopDetais;
