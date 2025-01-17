'use strict';

angular.module('animeCinemaApp')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: './views/home/home.template.html',
      controller: 'homeController'
    })
    .when('/anime/:id', {
      templateUrl: './views/anime/anime.template.html',
      controller: 'animeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
