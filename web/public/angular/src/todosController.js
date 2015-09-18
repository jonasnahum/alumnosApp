(function() {
    var app = angular.module('app');
    
    app.controller('TodosController', ['$http', '$location', 'alumnosProxy', 'tokenStorage', function($http, $location, proxy, tokenStorage) {
       
        var ctrl = this;
        ctrl.saludo =  tokenStorage.getEmail();
        ctrl.alumnos = [];

        proxy.getAll(function(alumnos){
            ctrl.alumnos = alumnos;
        });
        ctrl.logout = function (){
            tokenStorage.clearToken();
            $location.path("/login");
            return false;
        };
                
    }]);
})();