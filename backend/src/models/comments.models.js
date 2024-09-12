import mongoose, { mongo } from "mongoose";

const commentsSchema = mongoose.Schema({

    userId:{
        type: String,
        required: true,
    },
    videoId:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },

},{timestamps: true})


export const Comments = mongoose.model("Comments", commentsSchema)