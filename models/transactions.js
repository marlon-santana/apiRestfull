const mongoose = require('mongoose');


const Transaction = mongoose.model('Transaction', {
    title: String,
    amount: Number,
    category: String,
    type: String,
    createdAt: Number,
  })
  
  module.exports = Transaction