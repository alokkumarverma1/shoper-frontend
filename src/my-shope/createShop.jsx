import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateShop() {
    const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [error, setError] = useState("");
  const [shopData, setShopData] = useState({
    shopName: "",
    email: "",
    number: "",
    latitude: 0,
    longitude: 0,
    city: "Ballia",
    state: "UP",
  });


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setShopData((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Unable to fetch location. Please enter manually.");
        }
      );
    } else {
      setError("Geolocation not supported by your browser.");
    }
  }, []);

  const setValues = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      setShopData({ ...shopData, [name]: Number(value) });
    } else {
      setShopData({ ...shopData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:8080/shop/create",
        {
          shopName: shopData.shopName,
          latitude: shopData.latitude,
          longitude: shopData.longitude,
          city: shopData.city,
          state: shopData.state,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
       if(res.data.body === "shop create sucess"){
        navigate("/myshop");
       }

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="register min-h-screen w-full pt-20 text-black flex justify-center mb-20">
      <div className="center-area sm:w-1/2 w-full min-h-50">
        <div className="heading w-full flex justify-center font-bold text-2xl">
          <h1>Register Shop</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Shop Name */}
          <div className="data flex flex-col p-3 gap-1">
            <label>Shop Name</label>
            <input
              type="text"
              name="shopName"
              placeholder="Enter your shop name"
              className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4"
              onChange={setValues}
              value={shopData.shopName}
              required
            />
          </div>

        
          {/* Display auto fetched location */}
          <div className="data flex flex-col p-3 gap-1">
            <label>Latitude</label>
            <input
              type="number"
              name="latitude"
              className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4"
              value={shopData.latitude}
              readOnly
            />
          </div>

          <div className="data flex flex-col p-3 gap-1">
            <label>Longitude</label>
            <input
              type="number"
              name="longitude"
              className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4"
              value={shopData.longitude}
              readOnly
            />
          </div>

          {/* City */}
          <div className="data flex flex-col p-3 gap-1">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4"
              onChange={setValues}
              value={shopData.city}
              required
            />
          </div>

          {/* State */}
          <div className="data flex flex-col p-3 gap-1">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="Enter state"
              className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4"
              onChange={setValues}
              value={shopData.state}
              required
            />
          </div>

          {/* Error */}
          <div className="errormessage w-full h-10">
            <p className="text-red-600">{error}</p>
          </div>

          {/* Submit */}
          <div className="submit h-10 w-full flex justify-center mt-5">
            <button
              type="submit"
              className="h-9 w-25 rounded-[13px] bg-white shadow-md hover:shadow-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateShop;
