var mongoose = require('mongoose'), bcrypt = require('bcryptjs'), //Get the configuration from env or use defaults
        config = {
            user: process.env.MONGODB_USER,
            pass: process.env.MONGODB_PASS,
            host: process.env.MONGODB_HOST || 'localhost',
            port: process.env.MONGODB_PORT || '27017',
            db: process.env.MONGODB_DB || 'activeresource'
        }, user = '';

if (process.env.MONGOLAB_URI) {
    mongoose.connect(process.env.MONGOLAB_URI);
} else {

    if (config.user && config.pass) {
        user = config.user + ':' + config.pass + '@';
    }
    mongoose.connect('mongodb://' + user + config.host + ':' + config.port + '/' + config.db);
}

var schema = {}, odmApi = {};

schema.participant = new mongoose.Schema({
    name: {
        type: String
    },
    group: {
        type: String
    }
});

var participant = mongoose.model('participant', schema.participant);
var startParticipant = new participant({ name: 'John Turner', group: 'beginner'});
startParticipant.save();

odmApi.schema = schema;
odmApi.mongoose = mongoose;
for (var i in schema) {
    odmApi[i] = mongoose.model(i, schema[i]);
}
module.exports = odmApi;
