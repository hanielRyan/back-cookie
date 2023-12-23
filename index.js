const express = require("express");
const parser=require("cookie-parser");
const app=express();
const cors=require("cors");
app.use(cors({
    origin:"https://front-cookie.vercel.app",
    credentials:true
}));
app.use(express.json());
app.use(parser());
app.post("/post",(req,res)=>{
    res.set("Access-Control-Allow-Origin","https://front-cookie.vercel.app");
    res.set("Access-Control-Allow-Credentials","true");
    res.cookie("name",req.body.name,{maxAge:3600000});
    res.json(`sent cookie ${req.body.name}`);
})
app.listen(5000,()=>console.log("port created"))
