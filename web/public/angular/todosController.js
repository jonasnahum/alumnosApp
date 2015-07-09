(function() {
    var app = angular.module('app');
    
    app.controller('TodosController', ['$http', '$location', function($http, $location) {
       
        var ctrl = this;
        ctrl.alumnos = [];
        
        $http({
            method: 'GET',
            url: '/alumnos/api/'
        }).success(function(alumnos){
            ctrl.alumnos = alumnos;
        }).error(function(data, status, headers, config){
            console.error('%s %s %s', config.method, config.url, status);
        });
        
        ctrl.delete = function (id) {
            $http({
                method: "DELETE",
                url: '/alumnos/api/' + id
            }).success(function(){
                $location.path('/');
            }).error(function(data, status, headers, config){
                console.error('%s %s %s', config.method, config.url, status);
            });       
        }
        
    }]);
})();