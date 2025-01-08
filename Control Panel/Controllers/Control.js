const mongoose  = require('mongoose');
const schema = require('../Models/FirstSchema');

module.exports.dashboard = (req,res) => {
  res.render('Dashboard');
}
module.exports.addAdminPage = (req,res) => {
  res.render('addAdmin');
}
module.exports.viewAdminPage = async(req,res) => {
  await schema.find({})
  .then((data)=>{
    res.render('viewAdmin',{data});
  })
}

module.exports.addAdmin = async (req,res) => {
  // console.log(req.body);
  await schema.create(req.body)
  .then((data) => {
    res.redirect('/addAdminPage');
  });
};