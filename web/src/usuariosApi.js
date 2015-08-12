var UsuariosApi = (function() {
    var UsuariosApi = function(usuario) {
        this.usuario = usuario;
    };
    
    UsuariosApi.prototype.findByEmail = function(email, callback) {
        var that = this;    
        that.usuario.model.find({email: email}, callback);
    };
    
    UsuariosApi.prototype.save = function(body, callback) {
        var that = this;
        var usuario = that.usario.create(body);
        usuario.save(callback);        
    };
    
    return UsuariosApi;
})();

module.exports = UsuariosApi;