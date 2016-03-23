var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var getProducts = function(req,res){
  Product.find({}, function(err,results){
    if(err){
      console.log(err);
    } else {
      res.json(results);
    }
  })
}
module.exports = {
  index: function(req,res){
    getProducts(req,res)
  },
  create: function(req,res){
    var newProduct = new Product({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      quantity: req.body.quantity
    })
    newProduct.save(function(err){
      if(err){
        console.log(err);
      } else {
        getProducts(req,res);
      }
    })
  },
  delete: function(req,res){
    Product.remove({_id: req.params.id}, function(err,results){
      if(err){
        console.log(err);
      } else {
      }
        getProducts(req,res);
    })
  }
}
