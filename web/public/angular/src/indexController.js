(function() {
    var app = angular.module('app');
    
    app.controller('IndexController', ['tokenStorage', '$location', function(tokenStorage, $location) {
       
        var ctrl = this;
        ctrl.logout = function (){
            tokenStorage.clearToken();
            $location.path("/login");
            return false;
        };
        
    }]);
})();