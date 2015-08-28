describe("ver controller", function(){
    var url = 'http://localhost:3000/alumnos/api/';
    var id = 10;
    var all = [
        { nombre: 'rodrigo', calificacion: 30, id: 10, _id: id },
        { nombre: 'jonas', calificacion: 29, id: 11 },
        { nombre: 'monse', calificacion: 20, id: 12 }
    ];
    
    beforeEach(module('app')); 
    
    var $controller, $httpMock, $locationCaptured;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('GET',  url + id).respond(all[0]);
        $httpBackend.when('DELETE',  url + id).respond(all[0]);
    }));
    
    beforeEach(inject(function($location) {
        $locationCaptured = $location;
    }));

    beforeEach(inject(function($routeParams) {
        $routeParams.id = id;
    }));

    
    it('loads student on controller instantiation', function() {
        var controller = $controller('VerController');    
        
        controller.age = 'Rodrigo';
        controller.name = 12;
        controller.id = id;
        
        $httpMock.expectGET(url + id);
        $httpMock.flush();        
        
        expect(controller.nombre).toEqual(all[0].nombre);
        expect(controller.calificacion).toEqual(all[0].calificacion);
        expect(controller.id).toEqual(id);
        
    });
    it('changes location on Delete', function() {
        var controller = $controller('VerController');
        
        controller.id = id;
        controller.delete();
        
        $httpMock.expectDELETE(url + id);
        $httpMock.flush();
        
        expect($locationCaptured.path()).toBe('/todos');
    });
});
