const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/AdminPanel');

const dataBase = mongoose.connection;

dataBase.once('open', (err) => {
  err ? console.log(err) : console.log('Mongoose Connected');
});

module.exports = dataBase;
