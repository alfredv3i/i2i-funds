var jwt = require('express-jwt');
var auth = jwt({
    secret: 'secretcode',
    userProperty: 'payload'
});

module.exports = function(app) {

var user = require('../controllers/UserController');

    app.post('/api/login', user.login);
    app.post('/api/users', auth, user.create);

var fund = require('../controllers/FundController');

    app.get('/api/funds/:id', auth, fund.getFunds);

    app.route('/api/funds/:id')
       .get(auth, fund.getPendingFunds)
       .post(auth, fund.create)
       .put(auth, fund.update);

    function test(req, res) {
        console.log(req.params);
    }

};
