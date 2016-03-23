var Customer = require('../controllers/CustomerController.js');
var Product = require('../controllers/productsController.js');

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
  app.get('/products',function(req,res){
    Product.index(req,res);
  });
  app.post('/products',function(req,res){
    Product.create(req,res);
  })
  app.delete('/products/:id',function(req,res){
    Product.delete(req,res);
  })
};
