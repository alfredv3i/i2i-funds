var User = require('../models/user');

exports.create = function(req, res) {
    console.log('in controller');
    var user = new User(req.body);
    console.log(req.body);
    user.save(function(err, user) {
        if (err) {
            console.log('error');
            return res.json(400, err);
        }
        console.log('success');
        User.find({}, function(err, users) {
            console.log(users);

        });
        return res.jsonp(user).status(200);
    });
};
