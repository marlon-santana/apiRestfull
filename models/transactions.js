const mongoose = require('mongoose');


const Transaction = mongoose.model('Transaction', {
    id: Number,
    title: String,
    value: Number,
    amount: Number,
    category: String,
    type: String,
    createdAt: Number,
  })
  
  module.exports = Transaction