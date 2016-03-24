var Customers = require('../controllers/CustomerController.js');
var Products = require('../controllers/productsController.js');
var Orders = require('../controllers/ordersController.js');

module.exports = function(app){
  app.get('/customers',function(req,res){
    Customers.index(req,res);
  });
  app.post('/customers',function(req,res){
    Customers.create(req,res);
  })
  app.delete('/customers/:id',function(req,res){
    Customers.delete(req,res);
  })
  app.get('/products',function(req,res){
    Products.index(req,res);
  });
  app.post('/products',function(req,res){
    Products.create(req,res);
  })
  app.delete('/products/:id',function(req,res){
    Products.delete(req,res);
  })
  app.get('/orders',function(req,res){
    Orders.index(req,res);
  });
  app.post('/orders',function(req,res){
    Orders.create(req,res);
  })
  app.delete('/orders/:id',function(req,res){
    Orders.delete(req,res);
  })
};
