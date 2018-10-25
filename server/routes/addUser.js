'user strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//add a new user to the database
router.post('/add', function (req, res) {
    let currUser = req.body;

    User.addUser(currUser, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).send('unable to create user');
        }
        return res.json(user)
    });
});

module.exports = router;