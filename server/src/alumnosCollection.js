var mongoose = require("mongoose");

var schema = mongoose.Schema({
    nombre: { type: String, unique: true, required: true },
    calificacion: {type: Number, min: 13, max:19}
});

module.exports = mongoose.model('Alumno', schema);
