'use strict'

angular.module('buttonModule')
  .directive('buttonComponent', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: './../../src/components/shared/button/button.template.html',
    };
  });