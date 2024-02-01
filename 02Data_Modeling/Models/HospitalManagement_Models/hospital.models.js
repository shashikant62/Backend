const mongoose =require("mongoose");
const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    address:{
        type:String,
        required:true,
        lowercase:true
    },
    pincode:{
        type:String,
        required:true,
    },
    specializedin:[{
        type:String,
    }],
},{timestamps:true});

export const hospital=mongoose.model("hospital",hospitalSchema);