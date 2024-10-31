import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB=async()=>{
    try{
        const connectionInstances=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected to ${connectionInstances.connection.host}`)
    }catch(error){
        console.log("MongoDB connection failed")
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB;