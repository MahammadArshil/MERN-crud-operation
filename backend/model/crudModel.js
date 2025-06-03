const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    profession: { type: String },
    experience: { type: Number },
});

const crudModel = mongoose.model("data", crudSchema);

module.exports = crudModel;
