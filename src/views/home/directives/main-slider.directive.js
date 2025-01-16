'use strict';

angular.module('homeView')
  .directive('mainSliderComponent', function() {
    return {
      restrict: 'E',
      controller: 'mainSliderController',
      templateUrl: './../../src/views/home/templates/main-slider.template.html'
    };
  })