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
                //this.prototype = config;
                for (var property in config) {
                    that[property] = config[property];
                }
                
            };
            Model.find = function(callback) {
                callback(null, mongoose.database);
            };
            Model.findById = function(id, callback) {
                var item = undefined;
                for(var i = 0; i < mongoose.database.length; i++) {
                    if(mongoose.database[i].id === id) {
                        item = mongoose.database[i];
                        break;
                    }
                }
                callback(undefined, item);
            };
            Model.findByIdAndRemove = function(id, callback) {
                var deleted = undefined;
                Model.findById(id, function(err, found) {
                    var index = mongoose.database.indexOf(found);
                
                    mongoose.database.splice(index, 1);
                    deleted = found;
                });
                callback(null, deleted);
            };
            Model.prototype.save = function(callback) {
                
                var that = this;
                Model.findById(this.id, function(err, found) {
                    if(found === undefined) {
                        mongoose.database.push(that);
                    }
                    else {
                        var index = mongoose.database.indexOf(found);
                        mongoose.database[index] = that;
                    }
                });
                callback(null, that);
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