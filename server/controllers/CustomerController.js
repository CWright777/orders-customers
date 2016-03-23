var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var getCustomers = function(req,res){
  Customer.find({}, function(err,results){
    if(err){
      console.log(err);
    } else {
      res.json(results);
    }
  })
}
module.exports = {
  index: function(req,res){
    getCustomers(req,res)
  },
  //index: function(req,res){
    //Customer.find({}, function(err,results){
      //if(err){
        //console.log(err)
      //} else {
        //res.json(results);
      //}
    //})
  //},
  create: function(req,res){
    var newCustomer = new Customer({name: req.body.name})
    newCustomer.save(function(err){
      if(err){
        console.log(err);
      } else {
        getCustomers(req,res);
      }
    })
  },
  delete: function(req,res){
    Customer.remove({_id: req.params.id}, function(err,results){
      if(err){
        console.log(err);
      } else {
      }
        getCustomers(req,res);
    })
  }
}
