var mongoose = require('mongoose');

var alumnoSchema = mongoose.Schema({
    nombre: String,
    calificacion: Number
});

var Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = function (config) {
    return new Alumno(config);
};