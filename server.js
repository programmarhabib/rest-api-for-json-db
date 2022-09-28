const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const userRouter = require('./Routes/user')


//init environment variable
const PORT = process.env.PORT || 2020


// express init
const app = express();


// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// api routes
app.use('/api/v1/user', userRouter)


// listen port
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`.bgGreen.red);
})

