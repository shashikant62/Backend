const mongoose =require("mongoose");

const orderItemsSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        require:true
    }
})


const catogorySchema=new mongoose.Schema({
    orderprice:{
        type:Number,
        required:true,
    
    },
    costomer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["pending","cancelled","delivered"],
        default:"pending"
    }
},{timestamps:true});

export const Catogory=mongoose.model("Catogory",catogorySchema);