const express = require("express");
const parser=require("cookie-parser");
const app=express();
const cors=require("cors");
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(express.json());
app.use(parser());
app.post("/post",(req,res)=>{
    res.set("Access-Control-Allow-Origin","http://localhost:3000");
    res.set("Access-Control-Allow-Credentials","true");
    res.cookie("name",req.body.name,{httpOnly:true,sameSite:"strict"});
    res.json(`sent cookie ${req.body.name}`);
})
app.listen(5000,()=>console.log("port created"))
