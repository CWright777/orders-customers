var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String,
  orders: [{type: mongoose.Schema.ObjectId, ref:"Order"}]
})

var Customer = mongoose.model('Customer', CustomerSchema)
