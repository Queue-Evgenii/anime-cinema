'use strict'

angular.module('api')
  .service('animeApi', ['$http', function($http) {
    const apiUrl = 'https://api.jikan.moe/v4/top/anime';

    this.getTopAnime = (params) => {
      return new Promise((resolve, reject) => {
        $http
          .get(apiUrl, { params })
          .then(res => resolve(res.data))
          .catch(err => reject(err));
      })
    };
  }]);