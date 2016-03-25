angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'views/dashboard.html',
    controller: 'dashboardsController'
  })
  .when('/orders', {
    templateUrl: 'views/orders.html',
    controller: 'ordersController'
  })
  .when('/products', {
    templateUrl: 'views/products.html',
    controller: 'productsController'
  })
  .when('/customers', {
    templateUrl:'views/customers.html',
    controller: 'CustomerController'
  })

}]);
