'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
let router = express.Router();
let User = require('../models/user');

// First it compares the typed in password against the one stored in the DB 
// during registration, if it passes then triest to find an exact match in the DB with the provided
// credentials
router.post('/user', function (req, res) {
    bcrypt.compare(req.body.current.password, req.body.data.password).then(function(response){
        if (response) {
            let currUser = {
                email: req.body.current.email,
                username: req.body.current.username,
                password: req.body.data.password
            }
            User.findUser(currUser, function (err, user) {
                if (err) {
                    console.log(err, 'Error finding user');
                }
                if (user) {
                    res.status(200).send(user);
                } else {
                    res.status(404).send('No such user found');
                }
            });
        } else {
            res.status(404).send();
        }
    });
});

module.exports = router;