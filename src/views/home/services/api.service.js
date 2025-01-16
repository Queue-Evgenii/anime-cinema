'use strict'

angular.module('homeView')
  .service('apiService', ['animeGetApi', function(animeGetApi) {
    this.getTopAnime = function() {
      return animeGetApi.getTopAnime({filter: 'bypopularity'});
    }
    this.getAnimeByDay = function(day) {
      return animeGetApi.getAnimeByDay({filter: day});
    }
  }]
);