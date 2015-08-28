describe("nuevo controller", function(){
    var url = 'http://localhost:3000/alumnos/api/';
    
    beforeEach(module('app')); 
    
    var $controller, $httpMock, $locationCaptured;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('POST', url).respond(false);
    }));
    
    beforeEach(inject(function($location) {
        $locationCaptured = $location;
    }));

    
    it('changes location on Save', function() {
        var controller = $controller('NuevoController');
        
        controller.guardar();
        
        $httpMock.expectPOST(url);
        $httpMock.flush();
        
        expect($locationCaptured.path()).toBe('/');
    });
});