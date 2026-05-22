const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

// calling express in app
const app = express();

//Database Connection

connectDB();

//cors middleware
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use(express.json()); //body parser

//health routes;
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Route health is ok!" })
})

//routes

//User
app.use("/ru/api/auth", userRoutes);


//Admin
app.use("/ra/api/auth", adminRoutes);


//global error handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: err.message || "Server Error",
    });
});

const PORT = 9000

//server start
app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
})