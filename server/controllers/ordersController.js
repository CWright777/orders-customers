var mongoose = require('mongoose');

var Order = mongoose.model('Order');
var Product = mongoose.model('Product')
var Customer = mongoose.model('Customer')

var getOrders = function(req,res){
  Order.find({})
  .populate('_product')
  .populate('_customer')
  .exec(function(err,results){
    if(err){
      console.log(err)
    } else {
      res.json(results);
    }
  })
}

module.exports = {
  index: function(req,res){
    getOrders(req,res)
  },
  create: function(req,res){
    var newOrder = new Order({
      _customer: req.body.customerId,
      quantity: req.body.quantity,
      _product: req.body.productId
    })
    Product.findOneAndUpdate({_id: req.body.productId},
      {$push: {"orders": newOrder}, $inc: {"quantity": (newOrder.quantity)*-1}},
      function(err,product){
        if(err){
          console.log(err);
        } else {
          Customer.findOneAndUpdate({_id: req.body.customerId},
            {$push: {"orders": newOrder}},
            function(err,customer){
              if(err){
                console.log(err);
              } else {
                newOrder.save(function(order_err){
                  if(order_err){
                    console.log(order_err);
                  } else {
                    getOrders(req,res);
                  }
                })
              }
          })
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
