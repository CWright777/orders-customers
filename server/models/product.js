var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  created_at: { type: Date, default: Date.now },
  order: {type: mongoose.Schema.ObjectId, ref:"Order"}
})

var Product = mongoose.model('Product', ProductSchema)
