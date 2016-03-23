angular.module('ordersCtrl', []).controller('ordersController', function($scope,Customer,Order){

  Customer.get(function(customers){
    $scope.customers = customers;
  })
})
