const express = require("express");
const { loginAdmin, registerAdmin } = require("../controllers/adminController");

const adminRoutes = express.Router();

adminRoutes.post("/register", loginAdmin);
adminRoutes.post("/login", registerAdmin);


module.exports = adminRoutes;