const express = require("express");
const parser=require("cookie-parser");
const app=express();
const cors=require("cors");
app.use(cors({
    origin:"https://front-cookie.vercel.app",
    credentials:true
}));
app.use(parser());
app.get("/",(req,res)=>{
    res.set("Access-Control-Allow-Origin","https://front-cookie.vercel.app");
    res.set("Access-Control-Allow-credentials","true");
    res.cookie("name","anonymous",{secure:true});
    res.status(200).json("sent cookie");
})
app.listen(5000,()=>console.log("port created"))
