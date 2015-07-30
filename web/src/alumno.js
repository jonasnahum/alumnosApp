var Alumno = function(mongoose) {
    this.mongoose = mongoose;
    this.schema = {
        nombre: String,
        calificacion: Number
    };
    this.model = mongoose.model('Alumno', schema);
};

Alumno.prototype.create = function (configObj) {
    var that = this;
    return new that.model(configObj);
};

module.exports = Alumno;