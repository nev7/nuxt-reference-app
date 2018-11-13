'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//retrieve a user from the database
router.get('/user', function (req, res) {
    let currUser = {
        email: req.query.email,
        username: req.query.username,
        password: req.query.password
    }
    User.findUser(currUser, function (err, user) {
        if (err) {
            console.log(err, 'Error finding user');
        }
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(400).send('No such user found');
        }
    });
});

module.exports = router;