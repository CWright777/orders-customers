angular.module('orderService', []).factory('Order', ['$http', function($http){
  return {
    get: function(callback){
      $http.get('/orders').success(function(output){
        callback(output);
      })
    },
    create: function(newOrder,callback){
      $http.post('/orders', newOrder).success(function(output){
        callback(output);
      })
    },
  }
}])
