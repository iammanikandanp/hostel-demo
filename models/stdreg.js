import mongoose from "mongoose";

const schema = new mongoose.Schema({
    sno:{
        type:String,
        required:true,
        unique:true
    },
    rollno:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    class:{
        type:String,
        required:true,
    },
    dept:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    phno:{
        type:String,
        required:true,
    },
   parentphno:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"student"
    },
},{timestamps:true})  
export const std = mongoose.model("stdreg",schema)