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
    res.cookie("name","anonymous",{secure:true});
    res.json("sent cookie");
})
app.listen(5000,()=>console.log("port created"))
