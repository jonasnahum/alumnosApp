var Alumno = require("./../src/alumno");
var mongoose = require("./mongooseMock");
var AlumnosApi = require("./../src/alumnosApi");

describe("alumnos api", function() {
    it("getAll method", function(done){
        mongoose.database = [
            {nombre: "Jonas", calificacion: 9},
            {nombre: "ro", calificacion: 8}
        ];
        var alumno = new Alumno(mongoose);
        var api = new AlumnosApi(alumno);
        
        api.getAll(function(err, data) {
            expect(data).toBe(mongoose.database);
            done();
        });
    });
    
    
});