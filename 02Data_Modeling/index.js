const express=require("express");
require('dotenv').config();
const app=express();
const port= process.env.PORT;
// console.log(process.env.PORT);
app.get("/",(req,res)=>{
    res.send("hello developer");
})
app.get("/jsondata",(req,res)=>{
    res.json({
        id:1,
        name:"ramchandra",
        mobile_no:"997050####"
    });
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
