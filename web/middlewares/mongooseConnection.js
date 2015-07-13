var mongoose = require('mongoose');

(function() {
    var Middleware = function(conStr) {
        this.conStr = conStr;
        this.isOpen = false;
    }
    
    Middleware.prototype.regresar = function () {
        var middleware = function(req, res, next) {
            mongoose.connect(this.conStr);
            var db = mongoose.connection;
            db.on('error', function(err) {
                return next(err);
            });
            db.once('open', function (callback) {
                this.isOpen = true;
                req.db = db;
                return next();
            });
        };
        
        return middleware();
    }
        
})();
