import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser=asyncHandler(async(req,res,next)=>{
    const {fullName,email,password,username}=req.body;
    if([fullName,email,username,password].some((field)=>!field||field.trim()==="")){
        throw new ApiError(400,"All fields are required");
    }
    const existingUser=await User.findOne({$or:[{email},{username}]});
    if(existingUser){
        throw new ApiError(400,"User already exists");
    }
    const avatar= await uploadOnCloudinary(avatarLocalPath);
    const coverImage=coverImageLocalPath ? await uploadOnCloudinary(coverImageLocalPath):null;
    const user=await User.create({
      fullName,
      email,
      password,
      username:username.toLowerCase(),
      avatar:avatar.url,
        coverImage:coverImage?.url||"",
    });
    const createdUser=await user.findById(user._id).select("-password -refreshToken"); 
    if(!createdUser){
        throw new ApiError(500,"User not created");
    }
    res.status(201).json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export { registerUser };