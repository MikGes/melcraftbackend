import mongoose from "mongoose";

export const Requests = new mongoose.Schema({
    orderedBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    ordered_furniture:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"furniture"
    }
})