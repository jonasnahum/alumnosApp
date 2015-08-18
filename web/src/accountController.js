module.exports = (function() {
    var AccountController = function(express, usuariosApi) {
        this.express = express.module;
        this.usuariosApi = usuariosApi;
        this.router = this.express.Router();
        
        var router = this.router;
        var that = this;
            
        router.post('/login', usuariosApi.findByEmail);
        
        router.post('/signup', usuariosApi.save);
    };
    
    return AccountController;
})();