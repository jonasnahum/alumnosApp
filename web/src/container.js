//dependencies
var intravenous = require("intravenous");

//local modules
var Alumno = require("./alumno");
Alumno.$inject = ["mongoose"];

var AlumnosApi = require("./alumnosApi");
AlumnosApi.$inject = ["alumno"];

var AlumnosController = require("./alumnosController");
AlumnosController.$inject = ["express", "alumnosApi"];


var container = intravenous.create();

//register
container.register("mongoose", { mongoose: require('mongoose') });
container.register("alumno", Alumno);
container.register("alumnosApi", AlumnosApi);
container.register("express", { express: require('express') });
container.register("alumnosController", AlumnosController);

module.exports = container;