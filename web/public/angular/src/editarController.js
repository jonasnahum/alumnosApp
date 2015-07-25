(function() {
    var app = angular.module('app');    
    var dependencies = ['$http', '$location', '$routeParams', 'alumnosApi'];
    
    dependencies.push(function($http, $location, $routeParams, api) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        ctrl.id = $routeParams.id;
        
        ctrl.obtener = function(id) {
            api.getOne(id, function(alumno){
                ctrl.nombre = alumno.nombre;
                ctrl.calificacion = alumno.calificacion;
            });
        };
        
        ctrl.editar = function() {
            api.update(ctrl, function(alumnos){
                $location.path('/');
            });
        };
        
        ctrl.obtener($routeParams.id);
    });
        
    
    app.controller('EditarController', dependencies);
})();