'use strict'

angular.module('animeCinemaApp')
  .directive('defaultLayout', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: './../../src/layouts/default/default-layout.template.html'
    };
  });
