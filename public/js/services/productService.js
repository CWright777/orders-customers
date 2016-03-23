angular.module('productService', []).factory('Product', ['$http', function($http){
  return {
    get: function(callback){
      $http.get('/products').success(function(output){
        callback(output);
      });
    },
    create: function(newProduct, callback){
      $http.post('/products',newProduct).success(function(output){
        callback(output);
      })
    },
    delete: function(customerId, callback){
      $http.delete('/products/' + customerId).success(function(output){
        callback(output);
      })
    }
  }
}])
