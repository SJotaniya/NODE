const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Control');

const dataBase = mongoose.connection;

dataBase.once('open',(err)=>{
  err ? console.log(err) : console.log('Mongoose Connected');
});

module.exports = dataBase;