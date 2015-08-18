module.exports = (function() {
    var AlumnosController = function(express, alumnosApi) {
        this.express = express.module;
        this.alumnosApi = alumnosApi;
        this.router = this.express.Router();
        
        var router = this.router;
        
        router.get('/', alumnosApi.getAll);
        
        router.post('/', alumnosApi.save);
        
        router.get('/:id', alumnosApi.getOne);
        
        router.put('/', alumnosApi.update);
        
        router.delete('/:id', alumnosApi.delete);

    }
    
    return AlumnosController;
})();