(function() {
    var app = angular.module('app');
    
    app.controller('TodosController', ['$http', '$location', function($http, $location) {
       
        var ctrl = this;
        ctrl.alumnos = [];
        
        var promise = $http({
            method: 'GET',
            url: '/alumnos/api/'
        });
        
        promise.success(function(alumnos){
            ctrl.alumnos = alumnos;
        });
        
        promise.error(function(data, status, headers, config){
            console.error('%s %s %s', config.method, config.url, status);
        });
        
    }]);
})();