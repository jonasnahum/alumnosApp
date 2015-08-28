(function() {
    var app = angular.module('app');
    
    app.factory('alumnosProxy', ['proxyFactory', function(proxyFactory) {
        var proxy = proxyFactory('http://localhost:3000/alumnos/api/');
        return proxy;     
    }]);
})();
