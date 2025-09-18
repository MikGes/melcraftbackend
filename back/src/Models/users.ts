import mongoose from "mongoose";

export const UsersSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    reset_password_token: {
        type: String,
    },
    ratings: [
        {
            rated_furniture_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'furniture',
                required: true,
            },
            rate_number: {
                type: Number,
                required: true,
            },
            rate_message: {
                type: String,
                required: true,
            },
        }
    ],
    orders: [
        {
            ordered_furniture_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "furniture"
            }
        }
    ],
    verification_token: {
        type: String,
    },
    role: {
        type: String,
        default: "customer"
    }
})