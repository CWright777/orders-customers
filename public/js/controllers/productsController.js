angular.module('productsCtrl', []).controller('productsController', function($scope,Product){
  Product.get(function(products){
    $scope.products = products
  })

  $scope.addProduct = function(){
    Product.create($scope.newProduct, function(products){
      $scope.products = products;
      $scope.newProduct = {};
    })
  }

})
