(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', '$routeParams', function($http, $route) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        
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
        
        ctrl.obtener($route.id);
        
    }]);
})();