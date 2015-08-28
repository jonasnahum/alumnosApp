(function() {
    var app = angular.module('app');
    
    app.factory("accountProxy", ["proxyFactory", function(proxyFactory) {
        var AccountProxy = function() {
            this.loginProxy = proxyFactory('http://localhost:3000/account/api/login');
            this.logoutProxy = proxyFactory('http://localhost:3000/account/api/logout');
            this.signupProxy = proxyFactory('http://localhost:3000/account/api/signup');
        };
        
        AccountProxy.prototype.login = function(model, success){
            this.loginProxy.save(model, success);
        };
        
        //AccountProxy.prototype.logout = function(){}
        AccountProxy.prototype.signup = function(model, success){
            this.signupProxy.save(model, success);
        };
        
        return new AccountProxy();
    }]);
})();