var express = require('express');
var router = express.Router();
var alumnos = require('./../models/alumno');
var mongoose = require('mongoose');

router.get('/', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');

    Alumno.find(function (err, alumnos) {
        if (err) return next(err);
        res.json(alumnos);
    });
});

router.post('/', function(req, res, next){
    var alumno = alumnos(req.body);
    
    alumno.save(function(err, alumno){
        if(err) return next(err);
        res.json(alumno);       
    });

});

router.get('/:id', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');

    Alumno.findById(req.params.id, function (err, alumno) {
        if(err) return next(err);
        res.json(alumno);
    });

});

router.put('/', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');

    Alumno.findById(req.body.id, function (err, alumno) {
        if(err) return next(err);
        
        alumno.nombre = req.body.nombre;
        alumno.calificacion = req.body.calificacion;
        
        alumno.save(function(err, alumno) {
            if(err) return next(err);
            res.json(alumno);
        }); 
    });
});

router.delete('/:id', function(req, res, next) {
    var Alumno = mongoose.model('Alumno');
    
    Alumno.findByIdAndRemove(req.params.id, function(err, alumno) {
        if(err) return next(err);
        res.json(alumno);
    }); 
});

module.exports = router;
