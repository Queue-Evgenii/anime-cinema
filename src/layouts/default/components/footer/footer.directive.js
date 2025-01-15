'use strict'

angular.module('footerDefault')
  .directive('footerDefault', () => {
    return {
      restrict: 'E',
      templateUrl: './../../src/layouts/default/components/footer/footer.template.html',
      controller: 'footerDefaultController',
    };
  });