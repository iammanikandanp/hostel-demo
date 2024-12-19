import express from "express";
import dotenv from 'dotenv';
import connectdb from "./database/db.js";
dotenv.config()

const app=express()
app.use(express.json())
import router from "./routes/stdreg.js"

app.use('/api',router)


const port=process.env.PORT
 app.listen(()=>{
    console.log(`server running on http://localhost:${port}`)
    connectdb()
 })
