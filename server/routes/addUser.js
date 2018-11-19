'user strict';

const express = require('express');
const bcrypt = require('bcrypt');
let router = express.Router();
let User = require('../models/user');
let saltRounds = 10;

// First it hashes the password and then it adds the user to the DB
// the password is stored as a hash
router.post('/add', function (req, res) {
    let pwd = req.body.password;

    bcrypt.hash(pwd, saltRounds).then(function (hash) {
        let currUser = {
            email: req.body.email,
            username: req.body.username,
            password: hash
        };

        User.addUser(currUser, function (err, user) {
            if (err) {
                console.log(err);
                res.status(400).send('unable to create user');
            }
            return res.json(user)
        });
    });
});

module.exports = router;