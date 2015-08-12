var UsuariosApi = (function() {
    var UsuariosApi = function(usuario) {
        this.usario = usuario;
    };
    
    UsuariosApi.prototype.findByEmail = function(email, callback) {
        var that = this;       
        that.usuario.model.find({email: email}, callback);
    };
    
    return UsuariosApi;
})();

module.exports = UsuariosApi;