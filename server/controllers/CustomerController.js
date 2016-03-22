var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
  index: function(req,res){
    Customer.find({}, function(err,results){
      if(err){
        console.log(err)
      } else {
        res.json(results);
      }
    })
  }
}
