var Customer = require('../controllers/CustomerController.js');

module.exports = function(app){
  app.get('/',function(req,res){
    app.index(req,res);
  });
};
