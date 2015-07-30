//dependencies
var intravenous = require("intravenous");
var mongoose = require("mongoose");

//local modules
var alumno = require("./alumno");
alumno.$inject = ["mongoose"];

var alumnosApi = require("./alumnosApi");
alumnosApi.$inject = ["alumno"];


var container = intravenous.create();

//register
container.register("mongoose", mongoose);
container.register("alumno", alumno, 'singleton');
container.register("alumnosApi")
