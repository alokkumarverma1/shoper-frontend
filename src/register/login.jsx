import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(<>
    <div className="register min-h-screen w-full pt-20 text-black flex justify-center mb-20">
      <div className="center-area sm:w-1/2 w-full  min-h-50 ">
       <div className="heain w-full flex justify-center font-bolf title font-bold text-2xl"><h1>Register acount</h1></div>
        <form action="">
<div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">Number</label>
    <input type="number" name="" placeholder="enter your number" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4"/>
</div>
<div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">password</label>
    <input type="password" name="" placeholder="enter your password" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4"/>
</div>
<div className="sumit h-10 w-full flex justify-center mt-5">
<button className="h-9 w-25 rounded-[13px] bg-white shadow-md hover:shadow-lg">Login</button>
</div>
<p>Don't have a acount  &nbsp;<span className="title"><Link to={"/register"}>Register</Link></span></p>
        </form>
      </div>
    </div>
    </>)
}

export default Login;