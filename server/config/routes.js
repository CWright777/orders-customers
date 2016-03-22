var Customer = require('../controllers/CustomerController.js');

module.exports = function(app){
  app.get('/customers',function(req,res){
    Customer.index(req,res);
  });
};
