'use strict';

angular.module('homeView', [
    'slider',
  ])
  .controller('homeController', ['$scope', function($scope) {
    $scope.slides = [ 1, 2, 3, 4, 5 ];
    $scope.options = {
      slidePerView: 4,
      swipe: true,
    };
  }]);