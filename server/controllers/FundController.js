var Fund = require('../models/fund');

exports.getFunds = function(req, res) {
    console.log('exports.getFunds');
    Fund.find({user: req.params.id}, function(err, funds) {
        if (err) {
          console.log('Error getting funds', err);
          return res.status(400).json(err);
        }
        console.log('Getting funds from db successful');
        console.log(funds);
        return res.status(200).json(funds);
    })
};

exports.getPendingFunds = function(req, res) {
    Fund.find({status: 'Pending'}, function(err, funds) {
        if (err) {
          console.log('Error getting funds', err);
          return res.status(400).json(err);
        }
        console.log('Getting pending funds from db successful');
        console.log(funds);
        return res.status(200).json(funds);
    })
};

exports.update = function(req, res) {
    console.log(req.body);
    Fund.update({ _id: req.body._id }, { $set: { status: req.body.status }}, function(err) {
        if (err) {
          console.log('Error updating fund', err);
          return res.status(400).json(err);
        }
        console.log('Fund update successful');
        exports.getPendingFunds(req, res);
    })
};

exports.create = function(req, res) {
    var fund = new Fund(req.body.fund);
    fund.user = req.body.user;
    fund.date = new Date();
    fund.status = 'Pending';

    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() - 1;
    Fund.find({
            user: req.body.user,
            date: {
                $lt: new Date(),
                $gt: new Date(year + ',' + month)
            },
            $or: [{
                status: 'Pending'
            }, {
                status: 'Approved'
            }]
        },
        function(err, funds) {
            if (err) {
              console.log('Error creating new fund', err);
              return res.status(400).json(err);
            }
            if (funds.length > 0) {
                console.log('You are not eligible to raise a new fund');
                return res.status(403).json({message: 'You are not eligible to raise a new fund'});
            } else {
                fund.save(function(err, fund) {
                    if (err) {
                        console.log('Error creating new fund', err);
                        return res.status(400).json(err);
                    }
                    console.log('Fund created successfully');
                    return res.status(200).json(fund);
                });
            }
        })
};
