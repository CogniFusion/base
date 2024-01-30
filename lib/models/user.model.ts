import mongoose from "mongoose";

// Define the user schema for now, we always can edit it in the future
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    onboarded: {
        type: Boolean,
        required: true
    }
})
// Create the User model if it does not exist, otherwise use the existing one
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User