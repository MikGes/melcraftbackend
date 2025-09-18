import mongoose from "mongoose";

export const FurnitureSchema = new mongoose.Schema({
    furniture_type: {
        type: String,
        required: true,
    },
    furniture_name: {
        type: String,
        required: true
    },
    furniture_description: {
        type: String,
        required: true
    },
    furniture_price: {
        type: Number,
        required: true
    },
    special_description: {
        type: String
    },
    furniture_image: {
        type: Buffer,
        required: false,
        contentType: {
            type: String,  
            required: true
        }
    }
})