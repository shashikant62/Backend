const mongoose =require("mongoose");
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    salary:{
        type:String,
        required:true
    },
    Qualification:{
        type:String,
        required:true
    },
    worksInhospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital"
    }
},{timestamps:true});

export const doctor=mongoose.model("doctor",doctorSchema);