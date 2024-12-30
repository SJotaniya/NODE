const mongoose = require("mongoose");

const schema = mongoose.Schema({
  book: {
    type: String,
    required: true
  },
  auther: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const firstSchema = mongoose.model("Data", schema);
module.exports = firstSchema;