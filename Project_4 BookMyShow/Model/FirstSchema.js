const mongoose = require("mongoose");

const schema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    directername: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    }
});

const firsSchema = mongoose.model("movie", schema);
module.exports = firsSchema;