const mongooes = require("mongoose");

const products = mongooes.Schema({
  image:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  
})