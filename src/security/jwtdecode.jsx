import React from "react";
import jwt_decode from "jwt-decode";

function JwtDecoder(){
    const token = localStorage.getItem("token");
    console.log("this si token " +token)
    if(!token){
        console.log(token);
    }
  if (!token) {
    console.log("Token not found");
    return [];  // empty roles return karo
  }

  try {
    const decoded = jwt_decode(token);
    return decoded.roles || [];
  } catch (err) {
    console.error("Invalid token:", err);
    return [];
}
}

export default JwtDecoder;