(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', "$location", '$routeParams', 'alumnosProxy', function($http, $location, $route, proxy) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        ctrl.id = $route.id;
        
        ctrl.obtener = function(id) {
            proxy.getOne(id, function(alumno){
                ctrl.nombre = alumno.nombre;
                ctrl.calificacion = alumno.calificacion;
            });
        };
        
        ctrl.delete = function () {
            proxy.delete(ctrl.id, function(){
                $location.path('/todos');
            });      
        };

        ctrl.obtener(ctrl.id);
        
    }]);
})();