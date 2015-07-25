describe("Alumnos Api ", function() {
    var url = '/alumnos/api/';
    var id = 1;
    var alumnos = [
        {nombre: 'Jonas', calificacion: 9},
        {nombre: 'Rodrigo', calificacion: 8},
        {nombre: 'Monserrat', calificacion: 7}
    ];
    var $httpMock = undefined;
    var api = undefined;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($httpBackend, alumnosApi) {
        $httpMock = $httpBackend;
        api = alumnosApi;
        $httpBackend.when('GET', url).respond(alumnos);
        $httpBackend.when('GET', url + id).respond(alumnos[0]); 
        $httpBackend.when('POST', url).respond(true);
        $httpBackend.when('PUT', url).respond(true);
        $httpBackend.when('DELETE', url + id).respond(false);
    }));
    
    it('gets all', function() {
        $httpMock.expectGET(url);
        api.getAll(function(data) {                
            expect(data).toEqual(alumnos);
        });
        $httpMock.flush();    
    });
    
    it('gets one', function() {
        api.getOne(id, function(data) {                
            expect(data).toEqual(alumnos[0]);
        });
        $httpMock.expectGET(url + id);
        $httpMock.flush();
    });
    
    it('saves', function() {
        
        $httpMock.expectPOST(url);
        api.save(alumnos[1], function(result) {                
            expect(result).toBe(true);
        });
        $httpMock.flush();
        
    });
    
    it('updates', function() {
        
        $httpMock.expectPUT(url);
        api.update(alumnos[1], function(result) {                
            expect(result).toBe(true);
        });
        $httpMock.flush();
        
    });
    
    
    it('Server fail', inject(function($log) {
        $log.error = function(){
            console.dir(params);
           // $log.error('%s %s %s', config.method, config.url, status);
            expect(params[0]).toBe('%s %s %s');
            expect(params[1]).toBe('PUT');
            expect(params[2]).toBe(url);
            expect(params[3]).toBe(404);
            
        };
        

        var obj = $httpMock.when('PUT', url);
        obj.respond(404, null, null, 404);
        
        // Api.prototype.error = function(data, status, headers, config){
        
        $httpMock.expectPUT(url);
        api.update(alumnos[1], function(result) {                
            //expect(result).toBe(false);
        });
        $httpMock.flush();
        
    }));
    
    
});