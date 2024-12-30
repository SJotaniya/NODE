const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Library");

const db = mongoose.connection;

db.once("open", (err)=>{
  err ? console.log(err) : console.log("Database Sucessfully Connected");
})

module.exports = db;