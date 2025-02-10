const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productName:{
        type : String,
        required : true
    },
    productPrice:{
        type : String,
        required : true
    },
    productDescription:{
        type : String,
        required : true
    },
    ExcategoryId:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "ExtraCategorie",
        required : true
    },
});


const firstSchema = mongoose.model("Product",schema);

module.exports = firstSchema;