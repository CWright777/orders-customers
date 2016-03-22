var mongoose = require('mongoose');

var OrdersSchema = new mongoose.Schema({
  _customer: {type: mongoose.Schema.ObjectId, ref:"Customer"},
  _product: {type: mongoose.Schema.ObjectId, ref:"Product"},
  quantity: Number,
  created_at: { type: Date, default: Date.now }
})

var Order = mongoose.model('Order', OrdersSchema);
