const express = require('express');
const port = 1432;

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use(express.static('Public'));

const path = require('path');
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/', require('./Routes/Route'));

app.listen(port, (err) => {
  err ? console.log(err) : console.log('Server on port : ' + port);
});
