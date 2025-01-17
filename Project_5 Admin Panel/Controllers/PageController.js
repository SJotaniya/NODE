const schema = require('../Model/Schema');
const fs = require('fs');

module.exports.loginPage = (req, res) => {
  res.render('Login');
};
module.exports.login = async (req, res) => {
  let admin = await schema.findOne({ email: req.body.email });
  if (admin) {
    if (admin.password == req.body.password) {
      res.cookie('adminData', admin);
      res.redirect('/dashboard');
    } else {
      res.redirect('/');
    }
  }
};

module.exports.dashboard = (req, res) => {
  // console.log(req.cookies.adminData);
  req.cookies.adminData ? res.render('Dashboard') : res.redirect('/');
};
module.exports.addAdminPage = (req, res) => {
  req.cookies.adminData ? res.render('addAdmin') : res.redirect('/');
};

module.exports.viewAdminPage = async (req, res) => {
  if (req.cookies.adminData) {
    let data = await schema.find({}).then((data) => {
      res.render('viewAdmin', { data });
      // console.log(data);
    });
  } else {
    res.redirect('/');
  }
};

module.exports.addAdmin = async (req, res) => {
  req.body.image = req.file.path;
  await schema.create(req.body).then((data) => {
    res.redirect('/addAdminPage');
  });
};

module.exports.editData = async (req, res) => {
  if (req.cookies.adminData) {
    let data = await schema.findById(req.query.id);
    res.render('editData', { data });
    // console.log(data);
  } else {
    res.redirect('/');
  }
};

module.exports.updateData = async (req, res) => {
  let img = '';
  let singleData = await schema.findById(req.body.id);

  req.file ? (img = req.file.path) : (img = singleData.image);
  req.file && fs.unlinkSync(singleData.image);
  req.body.image = img;

  await schema.findByIdAndUpdate(req.body.id, req.body).then((data) => {
    res.redirect('/viewAdminPage');
  });
};

module.exports.deleteAdmin = async (req, res) => {
  schema
    .findById(req.query.id)
    .then((singleData) => {
      if (singleData) {
        fs.unlinkSync(singleData.image);
      }
      return schema.findByIdAndDelete(req.query.id);
    })
    .then(() => {
      res.redirect('/viewAdminPage');
    });
};

module.exports.logout = (req, res) => {
  res.clearCookie('adminData');
  res.redirect('/');
};
