//1. Imports
const express = require('express');
//const server = express();
const cors = require('cors')
const app = express()
const userRouter = require('./users/users-router')
//const userRouter = require("./Users/users-router.js")

//2. Middlewares
app.use(express.json());


//3. Routers

app.use('/api',userRouter);

//server.use("/api/users",userRouter);

//4.Error Middleware

//Exports

module.exports =app; 