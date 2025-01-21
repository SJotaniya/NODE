const express = require('express');
const port = 1432;

const app = express();

const mongoose = require('./Config/Database');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static('Public'));
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

app.use('/', require('./Routes/Route'));

app.listen(port, (err) => {
  err ? console.log(err) : console.log('Server on port : ' + port);
});
