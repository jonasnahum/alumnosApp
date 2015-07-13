var mongoose = require('mongoose');

var DbConnection = function () {
    
}

DbConnection.prototype.connect = function (connectionString) {
    mongoose.connect(connectionString);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log('Conectado a alumnosDB');
    });    
}

module.exports = function() {
    return new DbConnection();
}

