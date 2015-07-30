var AlumnosApi = (function() {
    var AlumnosApi = function(alumno) {
        this.alumno = alumno;
    };
    
    AlumnosApi.prototype.getAll = function(callback) {
        var that = this;       
        that.alumno.model.find(callback);
    };
    
    AlumnosApi.prototype.save = function(body, callback) {
        var that = this;
        var alumno = that.alumno.create(body);
        alumno.save(callback);
    };
    
    
    
    return AlumnosApi;
})();

module.exports = AlumnosApi;