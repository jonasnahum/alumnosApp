var Alumno = function(error) {
    this.error = error;
};
Alumno.db = [];
Alumno.find = function(callback) {
    callback(alumno.error, alumno.bd);    
};
Alumno.findById = function(id, callback) {
    var found = undefined;
    for(var i = 0; i < alumno.bd.length; i++) {
        if(alumno.bd[i].id === id) {
            found = alumno.bd[i];
            break;
        }
    }
    callback(this.error, found);
};
Alumno.prototype.save = function(callback) {
    return callback(this.error, this);
};

var alumnoFactory = {
    error: undefined,
    get: function() {
        return new Alumno(alumnoFactory.error);
    }
};

module.exports = alumnoFactory;