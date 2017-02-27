var express = require('express'),
session = require('express-session'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
app = express();

mongoose.connect('mongodb://localhost:27017/i2ifundsDB');

mongoose.connection.once('connected', function() {
 console.log(".....DB CONNECTED....");
});

app.use(express.static('public/views'));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/api/users', function(req, res, next) {
//     console.log('in server');
//     next();
// });
require('./server/routes/index')(app);

var port = 3000;

app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});

module.exports = app;
