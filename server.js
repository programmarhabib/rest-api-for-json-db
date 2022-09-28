const express = require('express');
const colors = require('colors');
const { json } = require('body-parser');
const dotenv = require('dotenv').config();

//init environment variable

const PORT = process.env.PORT || 2020

// express init
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// listen port
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`.bgGreen.red);
})

