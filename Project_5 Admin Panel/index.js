const express = require('express');
const port = 1002;
const app = express();
const cookie = require('cookie-parser');
const mongoose = require('./Config/Database');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('Public'));
app.use(express.urlencoded())
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));
app.use(cookie());

app.use('/', require('./Routes/PageRoute'));

app.listen(port, (err) => {
  err ? console.log(err) : console.log('Server on port : ' + port);
});
