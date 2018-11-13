let mongoose = require('mongoose');

//user schema

let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let User = module.exports = mongoose.model('User', userSchema);

module.exports.addUser = function (user, cb) {
    User.create(user, cb);
};

module.exports.findUser = function (user, cb) {
    User.find(user, cb);
};