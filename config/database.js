const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);

    });
}

module.exports = connectDB;
