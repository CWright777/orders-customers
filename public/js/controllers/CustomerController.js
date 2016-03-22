angular.module('CustCtrl', []).controller('CustomerController', function($scope,Customer){
  $scope.index = function(){
    Customer.get()
  }
  $scope.index()
})
