'user strict';

let express = require('express');
let router = express.Router();
let User = require('../models/user');

//add a new user to the database
router.post('/add', function (req, res) {
    let user = req.body;

    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            console.log(err);
            if (user) {
                console.log('This user with this email already exists please try another.');
                return false;
            }
        }
        User.addUser(user, function (err, user) {
            if (err) {
                console.log(err);
                res.status(400).send('unable to create user');
            }
            return res.json(user)
        });
    });
});

module.exports = router;