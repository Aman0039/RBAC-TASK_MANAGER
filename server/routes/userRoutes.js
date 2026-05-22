const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");

const userRoutes = express.Router();

userRoutes.post("/login" , loginUser);
userRoutes.post("/register" , registerUser);


module.exports = userRoutes;