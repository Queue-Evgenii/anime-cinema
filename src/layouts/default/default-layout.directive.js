'use strict'

angular.module('defaultLayout')
  .directive('defaultLayout', () =>  {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: './../../src/layouts/default/default-layout.template.html'
    };
  });
