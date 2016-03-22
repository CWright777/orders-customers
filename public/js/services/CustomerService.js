angular.module('CustomerService', []).factory('Customer', ['$http', function($http){
  return {
    get: function(){
      return $http.get('/customers');
    }
  }
}])
