var Customer = require('../controllers/CustomerController.js');

module.exports = function(app){
  app.get('/customers',function(req,res){
    Customer.index(req,res);
  });
  app.post('/customers',function(req,res){
    Customer.create(req,res);
  })
  app.delete('/customers/:id',function(req,res){
    Customer.delete(req,res);
  })
};
