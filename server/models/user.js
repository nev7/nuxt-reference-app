let mongoose = require('mongoose');

//user schema

let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let User = module.exports = mongoose.model('user', userSchema);

module.exports.getUser = function (user, cb) {
    User.find(user, cb);
};

module.exports.addUser = function (user, cb) {
    User.create(user, cb);
};