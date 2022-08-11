/* Importing Dependencies */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/database')
const routes = require("./routers/routes")

/* Calling Database Connection Function from config folder */
connectDB()

/* Body Parsing and Dotenv */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

// Create model
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
}); // show that the server is running