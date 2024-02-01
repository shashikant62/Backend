const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
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
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subtodo"
        }
    ]//array of subtodos
});

export const Todo=mongoose.model("Todo",todoSchema);