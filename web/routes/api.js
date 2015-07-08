var express = require('express');
var router = express.Router();
var alumnos = require('./../models/alumno');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/alumnos');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Conectado a alumnosDB');
});


router.get('/', function(req, res, next) {
  res.json([{ nombre: 'monserrat', calificacion: 10 }]);
});


module.exports = router;
