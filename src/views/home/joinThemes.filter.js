'use strict'

angular.module('homeView')
  .filter('joinThemes', function() {
    return function(items, separator) {
      return items.map(item => item.name).join(separator || ', ');
    };
  });