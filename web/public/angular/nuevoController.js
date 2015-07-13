(function() {
    var app = angular.module('app');
    
    app.controller('NuevoController', ['$http', '$location', 'api', function($http, $location, api) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        
        ctrl.guardar = function() {
            api.save(ctrl, function(alumnos){
                $location.path('/');
            });
        };
        
        
    }]);
})();