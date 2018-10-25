'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//retrieve a user from the database
router.post('/check', function (req, res) {
    let currUser = req.body;

    User.findUser(currUser, function (err, user) {
        if (err) {
            console.log(err, 'Error finding user');
        }
        if (user) {
            res.status(200).send('User Exsists');
        } else {
            res.status(201).send();
        }
    });
});

module.exports = router;