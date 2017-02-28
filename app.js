var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    app = express();

mongoose.connect('mongodb://localhost:27017/i2ifundsDB');

mongoose.connection.once('connected', function() {
 console.log(".....DB CONNECTED....");
});

app.use(express.static('public/views'));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.post('/api/funds', function(req, res) {
//     console.log(req.body);
// });

require('./config/passport');
app.use(passport.initialize());

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    console.log(err);
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

require('./server/routes/index')(app);

var port = 3000;
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});

module.exports = app;
