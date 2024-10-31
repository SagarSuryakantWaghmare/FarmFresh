import dotenv from "dotenv";
import express from "express";
import {app} from "./app.js";
import { connect } from "mongoose";
dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running on port ${process.env.PORT||8000}`)
    })
})
.catch((err)=>{
    console.log("Mongo Db connection failed",err)
})