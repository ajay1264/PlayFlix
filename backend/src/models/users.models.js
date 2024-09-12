import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



const userSchema = mongoose.Schema({

    name:{
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:[true, 'Password is required']
    },
    avatar:{
        type: String,
    },
    watchHistroy:{
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    refreshToken: {
        type: String
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema)

export default User