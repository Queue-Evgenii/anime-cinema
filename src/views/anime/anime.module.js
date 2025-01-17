'use strict'

angular.module('animeView', [
  'api'
])
  .controller('animeController', [
    '$scope', '$routeParams', '$sce', 'animeGetApi',
    function($scope, $routeParams, $sce, animeGetApi) {
      $scope.animeItem = {};
      animeGetApi.getAnimeById($routeParams.id)
        .then(data => {
          $scope.$apply(function() {
            $scope.animeItem = data.data;
            $scope.animeItem.trailer.embed_url = $sce.trustAsResourceUrl($scope.animeItem.trailer.embed_url);
          })
        })
        .catch(err =>
          console.log('getAnimeById Err', err)
        );

      $scope.isPlaying = false;
      $scope.trailerHeight = 600;

      $scope.playVideo = () => $scope.isPlaying = true;
    }
  ]);