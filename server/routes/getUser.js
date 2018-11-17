'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
let router = express.Router();
let User = require('../models/user');

//retrieve a user from the database
router.post('/user', function (req, res) {
    bcrypt.compare(req.body.curr.password, req.body.data.password).then(function(response){
        if (response) {
            let currUser = {
                email: req.body.curr.email,
                username: req.body.curr.username,
                password: req.body.data.password
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
        } else {
            res.status(400).send();
        }
    });
});

module.exports = router;