const express = require('express');
const schema = require('./Models/FirstSchema');
const port = 1432;

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static('Public'));

app.use('/', require('./Routes/Route'));

app.listen(port,(err)=>{
  err ? console.log(err): console.log('Server on port : ' + port);
});