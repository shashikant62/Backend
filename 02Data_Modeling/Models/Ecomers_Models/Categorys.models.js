const mongoose =require("mongoose");
const catogorySchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true
    }
},{timestamps:true});

export const Catogory=mongoose.model("Catogory",catogorySchema);