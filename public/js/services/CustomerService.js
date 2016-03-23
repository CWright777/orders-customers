angular.module('CustomerService', []).factory('Customer', ['$http', function($http){
  return {
    get: function(callback){
      $http.get('/customers').success(function(output){
        callback(output);
      });
    },
    create: function(newCustomer, callback){
      $http.post('/customers',newCustomer).success(function(output){
        callback(output);
      })
    },
    delete: function(customerId, callback){
      $http.delete('/customers/' + customerId).success(function(output){
        console.log(output)
        callback(output);
      })
    }
  }
}])
