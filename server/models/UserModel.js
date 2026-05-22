const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { Type: String, required: true },
    email: { Type: String, required: true, unique: true },
    password: { Type: String, required: true },
    role: "user"
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel