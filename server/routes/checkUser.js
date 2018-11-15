'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//retrieve a user from the database
router.get('/check', function (req, res) {
    User.findUser({ email: req.query.email }, function (err, data) {
        if (err) {
            console.log(err, 'Error finding user');
        }
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(501).send();
        }
    });
});

module.exports = router;