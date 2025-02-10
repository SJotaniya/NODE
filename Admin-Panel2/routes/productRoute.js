const express = require("express")
const route = express.Router()
const ctl = require("../controllers/productCtl")

route.get("/addproduct",ctl.addproduct);

route.post("/addproduct",ctl.addproducts);
route.get("/viewproduct",ctl.viewproduct);

module.exports = route;