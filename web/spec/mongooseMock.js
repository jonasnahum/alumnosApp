var mongoose = {
    database: [],
    models: {},
    module: {
        Schema: function(config) {
            this.config = config;
        },
        model: function(name, schema) {
            
            var Model = function(config){
                var that = this;
                for (var property in config) {
                    that[property] = config[property];
                }
                
            };
            
            Model.find = function(callback) {
                callback(null, mongoose.database);
            };
            
            mongoose.models[name] = {
                model: Model,
                schema: schema
            };
            
            return Model;
        }
    }
};

module.exports = mongoose;