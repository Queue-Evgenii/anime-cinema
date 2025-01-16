'use strict';

angular.module('homeView')
  .directive('recentListComponent', function() {
    return {
      restrict: 'E',
      controller: 'recentListController',
      templateUrl: './../../src/views/home/templates/recent-list.template.html'
    };
  })