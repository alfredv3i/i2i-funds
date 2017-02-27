module.exports = function(app) {

var user = require('../controllers/UserController');

    app.post('/api/users', user.create);

    // app.use('/', function(req, res) {
    //     console.log('in index use');
    //     next();
    // })
    //
    // app.post('/api/users', function(req, res) {
    //     console.log('in index');
    // });
};
