var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FundSchema = new Schema({

    employeeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    },
    status: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

FundSchema.methods.setStatus = function(status) {
   this.status = status;
};

module.exports = mongoose.model('Fund', FundSchema);
