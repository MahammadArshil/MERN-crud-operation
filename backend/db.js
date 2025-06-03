require('dotenv').config();
const mongoose = require("mongoose");

function connectDB() {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to DB.");
        })
        .catch((error) => {
            console.log(`Error :${error}`);
        })
}

module.exports = connectDB;
