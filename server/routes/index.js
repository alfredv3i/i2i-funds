var jwt = require('express-jwt');
var auth = jwt({
    secret: 'secretcode',
    userProperty: 'payload'
});

module.exports = function(app) {

    var user = require('../controllers/UserController');

    app.post('/api/login', user.login);
    app.post('/api/users', user.create);

    var fund = require('../controllers/FundController');

    app.get('/api/funds/:id', auth, fund.getFunds);
    app.route('/api/funds')
       .get(auth, fund.getPendingFunds)
       .post(auth, fund.create)
       .put(auth, fund.update);
};
