(function() {
    var app = angular.module('app');
    
    app.factory('api', ['$http', function($http) {
        var api = {};
        api.url = '/alumnos/api/';
        
        api.error = function(data, status, headers, config){
            console.error('%s %s %s', config.method, config.url, status);
        };
        
        api.getOne = function(id, success) {
            $http({
                method: "GET",
                url: api.url + id
            }).success(success).error(api.error);
        };
        
        api.getAll = function(success) {
            $http({
                method: 'GET',
                url: api.url
            }).success(success).error(api.error);
        };
        
        api.delete = function(id, success) {
            $http({
                method: "DELETE",
                url: api.url + id
            }).success(success).error(api.error);       
        };
        
        api.save = function(model, success) {
            $http({
                method: 'POST',
                url: api.url,
                data: model
            }).success(success).error(api.error);
        };
        
        api.update = function(model, success) {
            $http({
                method: 'PUT',
                url: api.url,
                data: model
            }).success(success).error(api.error);
        };
        
        return api;
    }]);
})();

