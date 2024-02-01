const mongoose =require("mongoose");
const medicalrecordSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    totaldoctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor",
        required:true
    },
    totalpatient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"patient",
        required:true
    }
},{timestamps:true});

export const medicalrecord=mongoose.model("medicalrecord",medicalrecordSchema);



