'use strict';

angular.module('homeView')
  .controller('mainSliderController', ['$scope', 'apiService', function($scope, apiService) {
    $scope.slides = [];
    $scope.options = {
      slidePerView: 1,
      swipe: true,
      autoplay: true,
    };

    apiService.getTopAnime()
      .then(data => {
        $scope.$apply(function() {
          $scope.slides = data.data.slice(0, 10);
        });
      })
      .catch(err =>
        console.log('getTopAnime Err', err)
      );


    $scope.handleClick = function() {
      console.log(123);
    }
  }]);