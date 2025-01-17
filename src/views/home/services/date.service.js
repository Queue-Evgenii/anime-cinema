'use strict'

angular.module('homeView')
  .factory('dateFactory', function() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const getDayName = (date) => days[date.getDay()];

    return {
      days,
      getDayName
    };
  })