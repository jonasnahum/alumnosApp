
describe("alumnos api", function() {
    it("getAll method", function(done){
        var alumnoMock = require("./alumnoModelMock");
        var responseMock = require("./responseMock");
        var AlumnosApi = require("./../src/alumnosApi");
        var api = new AlumnosApi({alumno: alumnoMock});
        
        alumnoMock.bd = [
            {nombre: "Jonas", calificacion: 9},
            {nombre: "ro", calificacion: 8}
        ];
        
        api.getAll(null, responseMock, null);
        expect(responseMock.value).toEqual(alumnoMock.bd);
        done();
    });
    
    it("getAll method error", function(done) {
        var alumnoMock = require("./alumnoModelMock");
        var responseMock = require("./responseMock");
        var AlumnosApi = require("./../src/alumnosApi");
        var api = new AlumnosApi({alumno: alumnoMock});
        
        alumnoMock.error = new Error("GetAll method error");
        var next = function(err) {
            expect(err).toEqual(alumnoMock.error);
            done();
        };
        
        api.getAll(null, responseMock, next);
    });
    
    
    it("save method", function(done) {
        var alumnoMock = require("./alumnoModelMock");
        var alumnoFactory = require("./alumnoModelFactoryMock");
        var responseMock = require("./responseMock");
        var requestMock = require("./requestMock");
        var AlumnosApi = require("./../src/alumnosApi");
        var api = new AlumnosApi({alumno: alumnoMock}, alumnoFactory);
        
        
        requestMock.body = {nombre: "Juan", calificacion: 8};
        
        api.save(requestMock, responseMock, null);
        expect(responseMock.value.nombre).toBe(requestMock.body.nombre);
        expect(responseMock.value.calificacion).
        toBe(requestMock.body.calificacion);
        done();
                
    });
    
    it("save method error", function(done) {
        var alumnoMock = require("./alumnoModelMock");
        var alumnoFactory = require("./alumnoModelFactoryMock");
        var responseMock = require("./responseMock");
        var requestMock = require("./requestMock");
        var AlumnosApi = require("./../src/alumnosApi");
        var api = new AlumnosApi({alumno: alumnoMock}, alumnoFactory);
        
        alumnoFactory.error = new Error("save method error");
        
        api.save(requestMock, responseMock, function(err){
            expect(err).toEqual(alumnoFactory.error);
            done();
        });
    });
    
    it("getOne method", function(done) {
        var alumnoMock = require("./alumnoModelMock");
        var responseMock = require("./responseMock");
        var requestMock = require("./requestMock");
        var AlumnosApi = require("./../src/alumnosApi");
        var api = new AlumnosApi({alumno: alumnoMock});
        
        alumnoMock.error = undefined;
        alumnoMock.bd = [
            {nombre: "Pedro", calificacion: 8, id: 1}
        ];
        requestMock.params = {id: 1};
        
        api.getOne(requestMock, responseMock, null);
        expect(responseMock.value).toEqual(alumnoMock.bd[0]);
        done();
    });
    
    
    it("update method", function(done) {
        var alumnoMock = require("./alumnoModelMock");
        var responseMock = require("./responseMock");
        var requestMock = require("./requestMock");
        var AlumnosApi = require("./../src/alumnosApi");
        var api = new AlumnosApi({alumno: alumnoMock});

        alumnoMock.error = undefined;
        alumnoMock.bd = [
            {nombre: "Pedro", calificacion: 8, id: 1}
        ];
        
        var bodyUpdate = {nombre: "Juan", calificacion: 9, id: 1}; 
        requestMock.body = bodyUpdate;
        
        api.update(requestMock, responseMock, null);
        expect(responseMock.value).toEqual(bodyUpdate);
        done();
    });
    
    /*
    it("delete method", function(done) {
        var alumno = new Alumno(mongoose);
        var api =  new AlumnosApi(alumno);
        var body = {nombre: "Luis", calificacion: 2, id: 6};
        
        var found = undefined;
        alumno.model.findById(6, function(err, data) {
            found = data;
            expect(found).not.toBeUndefined();
        });
        
        api.delete(body.id, function(err, data) {
            expect(data).toEqual(found);
            alumno.model.findById(6, function(err, deleted) {
                expect(deleted).toBeUndefined();
            });
            done();
        });
        
    });
    */
});