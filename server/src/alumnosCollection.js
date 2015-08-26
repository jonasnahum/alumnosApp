var mongoose = require("mongoose");

var schema = mongoose.Schema({
    nombre: String,
    calificacion: {type: Number, min: 5, max:10}
});

module.exports = mongoose.model('Alumno', schema);
