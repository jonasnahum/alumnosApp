(function() {
    var app = angular.module('app');
    
    app.controller('BarController', ['accountProxy', '$location', 'tokenStorage', function(proxy, $location, tokenStorage) {
        var ctrl = this;
        
        ctrl.prueba = "prueba exitosa";

        
    }]);
})();