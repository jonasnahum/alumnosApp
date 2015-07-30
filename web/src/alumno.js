var Alumno = function(mongoose) {
    this.mongoose = mongoose.mongoose;
    this.schema = mongoose.mongoose.Schema({
        nombre: String,
        calificacion: Number
    });
    this.model = mongoose.mongoose.model('Alumno', this.schema);
};

Alumno.prototype.create = function (configObj) {
    var that = this;
    return new that.model(configObj);
};

module.exports = Alumno;