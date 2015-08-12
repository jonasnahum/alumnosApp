module.exports = (function() {
    var UsuariosController = function(express, usuariosApi, moment, jwt) {
        this.express = express.module;
        this.usuariosApi = usuariosApi;
        this.router = this.express.Router();
        this.moment = moment;
        this.jwt = jwt;
        
        var router = this.router;
        
        router.get('/login', function(req, res, next) {
            var that = this;
            that.usuariosApi.findByEmail(req.body.email, function(err, user) {
                if(err) {
                    return next(err);
                }
                
                if (!user) {
                    // incorrect username
                    return res.sendStatus(401);
                }

                if (!user.password === req.body.password) {
                    // incorrect password
                    return res.sendStatus(401);
                }

                var expires = that.moment().add(30, 'minutes').valueOf();
                var token = that.jwt.encode({
                    iss: user.email,
                    exp: expires
                }, 'cualquiera');

                res.json({
                    token : token,
                    expires: expires,
                    user: user
                });
            });
        });
    }
    
    return UsuariosController;
})();