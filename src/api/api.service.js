'use strict'

angular.module('api')
  .service('animeGetApi', ['$http', function($http) {
    const apiUrl = 'https://api.jikan.moe/v4/';

    const getRequest = (url, params) => {
      return new Promise((resolve, reject) => {
        $http
          .get(url, { params })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
      });
    }

    this.getTopAnime = (params) => {
      const endpoint = 'top/anime';
      return getRequest(apiUrl + endpoint, params);
    };

    this.getAnimeByDay = (params) => {
      const endpoint = 'schedules';
      return getRequest(apiUrl + endpoint, params);
    }
  }]);