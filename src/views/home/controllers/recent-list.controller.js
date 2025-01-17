'use strict';

angular.module('homeView')
  .controller('recentListController', [
    '$scope', 'apiService', 'dateFactory',
    function($scope, apiService, dateFactory) {
      $scope.recentEpLists = {
        Today: [],
        Yesterday: [],
      };

      /**
       * Creates objects for the current date and the previous day's date.
       */
      const [today, yesterday] = [new Date(), new Date(Date.now() - 86400000)];

      const defineEpLists = (day, listName) => {
        apiService.getAnimeByDay(dateFactory.getDayName(day))
          .then(data => {
            $scope.$apply(function() {
              $scope.recentEpLists[listName] = data.data.slice(0, 10);
            });
          })
          .catch(err =>
            console.log('getAnimeByDay Err', err)
          );
      }

      defineEpLists(today, 'Today');
      defineEpLists(yesterday, 'Yesterday');
    }
  ]
);