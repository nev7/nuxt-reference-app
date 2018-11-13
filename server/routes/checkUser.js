'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//retrieve a user from the database
router.get('/check', function (req, res) {
    User.findUser({email: req.query.email}, function (err, user) {
        if (err) {
            console.log(err, 'Error finding user');
        }
        if (user) {
            res.status(200).send('User already exsists.');
        } else {
            res.status(201).send();
        }
    });
});

module.exports = router;