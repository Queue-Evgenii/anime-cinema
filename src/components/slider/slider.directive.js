'use strict'

angular.module('slider')
  .directive('slider', () => {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        slides: '=',
      },
      transclude: true,
      templateUrl: './../../src/components/slider/slider.template.html',
      controller: 'sliderController',
      link: (scope, element) => {
        scope.root = element[0];
      }
    };
  });