const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullName: { Type: String, required: true },
    email: { Type: String, required: true, unique: true },
    password: { Type: String, required: true },
    role: "admin"
})

const AdminModel = mongoose.model("Admin", adminSchema);

module.exports = AdminModel;