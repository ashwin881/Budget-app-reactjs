const mongoose = require('mongoose')

const TransactionSchema = mongoose.model('PostMessage',{
    text: {
      type: String,
      trim: true,
      required: [true, 'Please add some text']
    },
    amount: {
      type: Number,
      required: [true, 'Please add a positive or negative number']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },"PostMessage");

module.exports  = { TransactionSchema}