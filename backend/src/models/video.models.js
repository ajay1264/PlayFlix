import mongoose, { mongo } from "mongoose";

const videoSchema = mongoose.Schema({

    userId:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    tags:{
        type: String,
        default: [],
    },
    likes:{
        type: String,
        default: [],
    },
    dislikes:{
        type: String,
        default: [],
    },
},{timestamps: true})


export const Video = mongoose.model("Video", videoSchema)