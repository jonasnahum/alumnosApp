(function() {
    var app = angular.module('app');    
    var dependencies = ['$http', '$location', '$routeParams'];
    
    dependencies.push(function($http, $location, $routeParams) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        ctrl.id = $routeParams.id;
        
        ctrl.obtener = function(id) {
            $http({
                method: "GET",
                url: '/alumnos/api/' + id
            }).success(function(alumno){
                ctrl.nombre = alumno.nombre;
                ctrl.calificacion = alumno.calificacion;
            }).error(function(data, status, headers, config){
                console.error('%s %s %s', config.method, config.url, status);
            });
        }
        
        ctrl.editar = function() {
            $http({
                method: 'PUT',
                url: '/alumnos/api/',
                data: ctrl
            }).success(function(alumnos){
                $location.path('/');
            }).error(function(data, status, headers, config){
                console.error('%s %s %s', config.method, config.url, status);
            });
        }
        
        ctrl.obtener($routeParams.id);
    });
        
    
    app.controller('EditarController', dependencies);
})();