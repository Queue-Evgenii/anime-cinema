'use strict'

angular.module('headerDefault')
  .directive('headerDefault', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: './../../src/layouts/default/components/header/header.template.html',
    };
  });