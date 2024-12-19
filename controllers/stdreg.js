import { mottu } from "../models/demo.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import sendMail from "../middleware/sendmail.js"
// new registration
export const regsitration=async (req,res)=>{
    try {
        const {name,email,password}=req.body
        let std=await mottu.findOne({email})
        if(std){
            return res.status(400).json({
                message:"std already registered"
            })
        }
        //password change

        const hashPassword= await bcrypt.hash(password,10)
        
        const otp = Math.floor(Math.random()*1000000)

        std={name,email,hashPassword}

        const activationToken=jwt.sign({std,otp},process.env.ACTIVATION_SECRET,{
            expiresIn:"5m"
        })

        const message=`message vanthurucha ${otp}`
        await sendMail(email,"welcome to my gmail mgs",message)

        return res.status(200).json({
            message:"message send successfully",
            activationToken,
        })

    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
    }
}

