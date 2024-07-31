import mongoose from "mongoose";

const { Schema } = mongoose

const User =
    new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        cargo: {
            type: String,
        }
    }, {timestamps: true})

export default mongoose.models.User || mongoose.model("User", User)