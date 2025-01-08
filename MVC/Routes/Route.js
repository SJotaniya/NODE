const express = require("express");
const route = express.Router();
const control = require("../Controllers/Control");

route.get("/", control.home);

module.exports = route;