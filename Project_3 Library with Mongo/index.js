const express = require('express');
const path = require('path');
const db = require('./config/db');
const schema = require('./model/firstSchema');
const multer = require('multer');

const port = 2004;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

const Storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, "uploads/");
  },
  filename: (req, file, cb)=> {
    cb(null, file.fieldname + " " + Date.now());
  }
});

const upload = multer({ storage: Storage }).single('image');

app.get('/', async (req, res) => {
  let data = await schema.find({});
  res.render('BookStore', { data });
});

app.post('/addBook', upload, async (req, res) => {
  req.body.image = req.file.path;
  await schema.create(req.body).then((data) => {
    res.redirect('/');
  });
});

app.get("/editBook", async (req, res) => {
  let data = await schema.findById(req.query.id);
  res.render('EditBook', { data });
});

app.post('/updateBook', async (req, res) => {
  await schema.findByIdAndUpdate(req.body.id, req.body).then((data) => {
    res.redirect('/');
  });
});

app.get('/deleteBook', async (req, res) => {
  await schema.findByIdAndDelete(req.query.id).then((data) => {
    res.redirect('/');
  });
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log('Server started on port : ' + port);
});