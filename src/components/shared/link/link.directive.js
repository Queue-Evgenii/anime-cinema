'use strict'

angular.module('linkModule')
  .directive('linkComponent', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        url: '@',
      },
      templateUrl: './../../src/components/shared/link/link.template.html',
    };
  });