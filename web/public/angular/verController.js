(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', '$routeParams', 'api', function($http, $route, api) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        
        ctrl.obtener = function(id) {
            api.getOne(id, function(alumno){
                ctrl.nombre = alumno.nombre;
                ctrl.calificacion = alumno.calificacion;
            });
        };
        
        ctrl.obtener($route.id);
        
    }]);
})();