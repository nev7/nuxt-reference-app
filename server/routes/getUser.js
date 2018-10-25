'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//retrieve a user from the database
router.post('/user', function (req, res) {
    let currUser = req.body;

    User.findUser(currUser, function (err, user) {
        if (err) {
            console.log(err, 'Error finding user');
        }
        if (user) {
            return res.json(user)
        } else {
            res.status(404).send('No such user found');
        }
    });
});

module.exports = router;