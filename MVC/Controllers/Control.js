const schema = require("../Model/FirstSchema");

module.exports.home =  async (req, res) => {
  let data = await schema.find({});
  res.render('BookStore', { data });
};