'use strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//retrieve a user from the database
router.get('/user', function(req, res){
    let user = req.body;

    User.getUser(user, function(err, res) {
        if (err) {
            console.log(err);
            res.status(400).send('No such user found.');
        }
        return res.json(user);
    });
});

module.exports = router;