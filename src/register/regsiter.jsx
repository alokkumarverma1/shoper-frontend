import React, { use, useState } from "react";
import axios from "axios";


function Register() {

    let [success,setSuccess] = useState(false);
    let [error,setError] = useState("");
    let [repassword,setRepassword]= useState();
 let [form,setForm] = useState({
  name:"",
  number:"",
  password:"",
  email:"",
  age:"",
  city:""
 })

 let setValues = (e)=>{
  setForm({
  ...form, [e.target.name]: e.target.value
 })
 }

 let chekdata = (e)=>{
 e.preventDefault()
   if(!form.name || !form.number || !form.email || !form.age || !form.password){
    setError("All input are required")
    return
   }
   if(form.number.length !== 10){
    setError("Number must be 10 digits")
    return
   }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    setError("Invalid email format");
    return;
  }
  if(form.password != repassword){
    setError("Password not match")
  }
  
  registeration();
 }

let registeration =async (e)=>{
 try{
 let res = await axios.post("http://localhost:8080/user/register",{
  name:form.name,
  age:form.age,
  email:form.email,
  password:form.password,
  number:form.number,
 });
  console.log(res)
 }catch(err){
  console.log(err)
 }


}




    return(<>
    <div className="register min-h-screen w-full pt-20 text-black flex justify-center mb-20">
      <div className="center-area sm:w-1/2 w-full  min-h-50 ">
       <div className="heain w-full flex justify-center font-bolf title font-bold text-2xl"><h1>Register acount</h1></div>
        <form action="">
          <div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">Name</label>
    <input type="text" name="name" placeholder="enter your name" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4" onChange={setValues} required/>
</div>
<div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">Number</label>
    <input type="number" name="number" placeholder="enter your number" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4" onChange={setValues}required/>
</div>
<div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">Email</label>
    <input type="email" name="email" placeholder="enter your number" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4" onChange={setValues}required/>
</div>
<div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">Age</label>
    <input type="number" name="age" placeholder="enter your number" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4" onChange={setValues} required/>
</div>
<div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">password</label>
    <input type="password" name="password" placeholder="enter your password" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4" onChange={setValues} required/>
</div>
<div className="data flex flex-col p-3 gap-1">
    <label htmlFor="">Conform - password</label>
    <input type="password" name="password" placeholder="enter your password" className="h-9 rounded-[13px] shadow-lg w-full bg-white p-4" onChange={(e)=>setRepassword(e.target.value)} required/>
</div>
<div className="errormessage w-full h-10">
<p className="text-red-600">{error}</p>
</div>
<div className="sumit h-10 w-full flex justify-center mt-5">
<button className="h-9 w-25 rounded-[13px] bg-white shadow-md hover:shadow-lg" onClick={chekdata}>Register</button>
</div>
      </form>
      </div>
    </div>
    </>)
}

export default Register;
