const express = require('express');
require('dotenv').config();

// calling express in app
const app = express();

//cors middleware
app.use(cors({
    origin : "*" ,
    methods : ["GET" , "PUT" , 'PATCH']
}))
app.use(express.json()); //body parser

app.get("/" , (req , res)=> {
    res.status(200).json({msg : "Route health is ok!"})
})

const PORT = 9000

//server start
app.listen(PORT , ()=>{
    console.log(`Server is started on ${PORT}`);
})