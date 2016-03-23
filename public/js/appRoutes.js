angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'views/home.html',
    controller: 'CustomerController'
  })
  .when('/orders', {
    templateUrl: 'views/orders.html',
    controller: 'ordersController'
  })
  .when('/products', {
    templateUrl: 'views/products.html',
    controller: 'productsController'
  })

}]);
