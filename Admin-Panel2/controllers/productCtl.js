const extraSchema = require("../model/extraCatSchema");
const productSchema = require("../model/productSchema");

module.exports.addproduct = async (req, res) => {
    await extraSchema.find({})
        .then((data) => {
            res.render("addProduct", { data });
        })
}

module.exports.addproducts = async (req, res) => {
    await productSchema.create(req.body)
        .then(() => {
            res.redirect("/product/addproduct")
        })
}

module.exports.viewproduct = async (req, res) => {
    await productSchema.find({})
        .populate({
            path: "ExcategoryId",
        populate: {
            path: "subcat"
        }
    })
    .then((data)=>{
        res.render("viewProduct",{data})
    })
}