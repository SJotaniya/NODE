const schema = require('../Models/FirstSchema');
const path = require('path');

module.exports.dashboard = (req, res) => {
  res.render('Dashboard');
};
module.exports.addAdminPage = (req, res) => {
  res.render('addAdmin');
};

module.exports.viewAdminPage = async (req, res) => {
  await schema.find({}).then((data) => {
    res.render('viewAdmin', { data });
  });
};

module.exports.addAdmin = async (req, res) => {
  // console.log(req.body);
  req.body.image = req.file.path;
  await schema.create(req.body).then((data) => {
    res.redirect('/addAdminPage');
  });
};

module.exports.updateData = async (req, res) => {
  let data = await schema.findById(req.query.id);
  res.render('editAdmin', { data });
}
