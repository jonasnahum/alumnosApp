var mongoose = require("mongoose");

var schema = mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: String
});

module.exports = mongoose.model('Usuario', schema);