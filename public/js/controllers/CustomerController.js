angular.module('CustCtrl', []).controller('CustomerController', function($scope,Customer){

  Customer.get(function(customers){
    $scope.customers = customers
  })

  $scope.addCustomer = function(){
    Customer.create($scope.newCustomer, function(customers){
      $scope.customers = customers
      $scope.newCustomer = {}
    });
  }

  $scope.removeCustomer = function(customerId){
    Customer.delete(customerId, function(customers){
      $scope.customers = customers;
    })
  }

})
