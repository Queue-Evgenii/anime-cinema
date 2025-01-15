'use strict'

angular.module('slider')
  .directive('slider', () => {
    return {
      restrict: 'E',
      scope: {
        root: '@',
        options: '=',
        slides: '=',
      },
      templateUrl: './../../src/components/slider/slider.template.html',
      controller: 'sliderController',
    };
  });