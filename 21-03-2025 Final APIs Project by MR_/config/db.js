const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/Final_Node_Api_project');
const db = mongoose.connection;

db.once("open", (err) => {
    err ? console.log(err) : console.log("MongoDB Connected Successfully!");
})

module.exports = db;