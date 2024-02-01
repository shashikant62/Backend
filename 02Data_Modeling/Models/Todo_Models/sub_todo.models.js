const mongoose=require("mongoose");

const subtodeSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true},

    complete:{
        type:Boolean,
        default:false
    },
    createby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

export const subtodo=mongoose.model("subtodo",subtodeSchema);