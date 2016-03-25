angular.module('dashboardsCtrl', []).controller('dashboardsController', function($scope,Product,Order,Customer){
 Product.get(function(products){
  $scope.products = products;
 })
 Customer.get(function(customers){
  $scope.customers = customers;
 })
 Order.get(function(orders){
  $scope.orders = orders;
 })
})
