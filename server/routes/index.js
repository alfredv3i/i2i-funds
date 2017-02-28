var jwt = require('express-jwt');
var auth = jwt({
    secret: 'secretcode',
    getToken: function(req, res) {
        return req.body.token;
    }
});

module.exports = function(app) {

var user = require('../controllers/UserController');

    app.post('/api/login', user.login);
    app.post('/api/users', user.create);

var fund = require('../controllers/FundController');
    app.post('/api/funds', auth, fund.create);

    function test(req, res, next) {
        console.log(req.body);
        next();
    }
};
