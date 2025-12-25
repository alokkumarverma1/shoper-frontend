import React from "react";

function UpdateShop(){

        const updateAcount = async()=>{
                  const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:8080/shop/update",{
                    headers:{Authorization:"Bearer " + (token)}
                })
            }
            
    return(<>
    <div className="update-shop min-h-screen w-full">
        this si update page of shope
    </div>    
    </>)
}

export default UpdateShop;