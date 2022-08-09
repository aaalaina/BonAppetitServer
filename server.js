const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv/config");
const app = express();
const dotenv = require('dotenv');

const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();

//connect to database

//create schema
const contactSchema = {
    name: String,
    email:String,
    phone:String,
    message:String
}

mongoose 
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successfull!"))
.catch((err) => {
    console.log(err);

});

// app.use(cors());//routes
app.use(express.json());



//create model


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  }); // show that the server is running