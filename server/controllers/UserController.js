var User = require('../models/user'),
    passport = require('passport');

exports.create = function(req, res) {
    var user = new User(req.body);
    // user.first_name = req.body.first_name;
    // user.last_name = req.body.last_name;
    // user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function(err) {
        if (err) {
            console.log('Error registering user');
            console.log(err);
            return res.status(400).json(err);
        }
        console.log('Successfully registered user');
        var token;
        token = user.generateJwt();
        return res.status(200).json({
            "token": token
        });
    });
};

exports.login = function(req, res) {
    console.log('in login');
    passport.authenticate('local', function(err, user, info) {
        var token;
        if (err) {
            console.log(err);
            return res.status(404).json(err);
        }
        if (user) {
            console.log('Login success');
            token = user.generateJwt();
            return res.status(200).json({
                "token": token
            });
        } else {
            return res.status(401).json(info);
        }
    })(req, res);

};
