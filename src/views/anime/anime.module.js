'use strict'

angular.module('animeView', [
  'api'
])
  .controller('animeController', [
    '$scope', '$routeParams', 'animeGetApi',
    function($scope, $routeParams, animeGetApi) {
      $scope.animeItem = {};
      animeGetApi.getAnimeById($routeParams.id)
        .then(data => {
          $scope.$apply(function() {
            $scope.animeItem = data.data;
          })
        })
        .catch(err =>
          console.log('getAnimeById Err', err)
        );
    }
  ]);