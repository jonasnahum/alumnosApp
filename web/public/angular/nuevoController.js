(function() {
    var app = angular.module('app');
    
    app.controller('NuevoController', ['$http', '$location', function($http, $location) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        
        ctrl.guardar = function() {
            $http({
                method: 'POST',
                url: '/alumnos/api/',
                data: ctrl
            }).success(function(alumnos){
                $location.path('/');
            }).error(function(data, status, headers, config){
                console.error('%s %s %s', config.method, config.url, status);
            });
        }
        
        
    }]);
})();