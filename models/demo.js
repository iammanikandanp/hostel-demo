import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        default:"student"
    },
},{timestamps:true})  
export const mottu = mongoose.model("mottu",schema)