'use strict';

angular.module('homeView', [
    'api',
    'sliderModule',
    'buttonModule',
    'linkModule'
  ])
  .controller('homeController', ['$scope', 'animeApi', function($scope, animeApi) {
    $scope.slides = [];
    $scope.options = {
      slidePerView: 1,
      swipe: true,
    };

    $scope.handleClick = function() {
      console.log(123);
    }

    animeApi
      .getTopAnime({
        filter: 'bypopularity'
      })
      .then(data => {
        $scope.$apply(function() {
          $scope.slides = data.data.slice(0, 10);
        });
      })
      .catch(err =>
        console.log('getTopAnime Err', err)
      );

  }]);