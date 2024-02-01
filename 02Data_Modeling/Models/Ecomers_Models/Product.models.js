const mongoose =require("mongoose");
const ProductSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        lowercase:true
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{
        type:String,
        required:true
    }
    ,
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Catogory"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
},{timestamps:true});

export const Product=mongoose.model("Product",ProductSchema);