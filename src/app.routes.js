'use strict';

angular.module('animeCinemaApp')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/home/home.template.html',
      controller: 'homeController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
