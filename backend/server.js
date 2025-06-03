const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const crudRoutes = require('./routes/crudRoutes.js');

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', crudRoutes);

connectDB();

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log("Error", error);
        return;
    }
    console.log(`Server running on Port ${process.env.PORT}.`);
});
