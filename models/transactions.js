const mongoose = require('mongoose');


const Transaction = mongoose.model('Transaction', {
    title: String,
    amount: Number,
    category: String,
    type: String,
    createdAt: String, // tem q ser new Date()
  })
  
  module.exports = Transaction