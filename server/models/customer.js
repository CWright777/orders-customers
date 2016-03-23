var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  created_at: { type: Date, default: Date.now },
  orders: [{type: mongoose.Schema.ObjectId, ref:"Order"}]
})

var Customer = mongoose.model('Customer', CustomerSchema)
