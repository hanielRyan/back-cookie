const express = require("express");
const parser=require("cookie-parser");
const app=express();
const cors=require("cors");
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(parser());
app.get("/",(req,res)=>{
    res.cookie("name","anonymous",{secure:true,sameSite:"lax"});
    res.json("sent cookie");
})
app.listen(5000,()=>console.log("port created"))