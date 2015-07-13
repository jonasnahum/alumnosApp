(function() {
    var app = angular.module('app');
    
    app.controller('TodosController', ['$http', '$location', 'api', function($http, $location, api) {
       
        var ctrl = this;
        ctrl.alumnos = [];
        
        api.getAll(function(alumnos){
            ctrl.alumnos = alumnos;
        });
        
        ctrl.delete = function (id) {
            api.delete(id, function(){
                $location.path('/');
            });      
        };
        
    }]);
})();