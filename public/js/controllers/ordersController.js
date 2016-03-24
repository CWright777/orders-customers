angular.module('ordersCtrl', []).controller('ordersController', function($scope,Customer,Order,Product){
  Product.get(function(products){
    $scope.products = products;
  })
  Customer.get(function(customers){
    $scope.customers = customers;
  })
  Order.get(function(orders){
    $scope.orders = orders;
  })
  $scope.addOrder = function(){
    Order.create($scope.newOrder, function(orders){
      $scope.orders = orders;
      $scope.newOrder = {};
    })
  }
})
