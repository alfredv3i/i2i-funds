var Fund = require('../models/fund');

exports.create = function(req, res) {
  console.log('create fund');
  console.log(req.body.fund);
  var fund = new Fund(req.body.fund);
  fund.user = req.body.user;
  fund.date = new Date();
  fund.setStatus('Pending');

  fund.save(function(err, fund) {
    if (err) {
        console.log('Error creating new fund');
        console.log(err);
        return res.status(400).json(err);
    }
    console.log('Fund created successfully');
    Fund.find({}, function(err, funds) {
        console.log(funds);
    })
    return res.status(200).json(fund);
  });
};
