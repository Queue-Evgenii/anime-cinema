'use strict'

angular.module('footerDefault')
  .controller('footerDefaultController', ['$scope', ($scope) => {
    $scope.lists = [
      {
        name: 'Navigation',
        items: ['Popular', 'Seasons', 'Schedule', 'News', 'Games']
      },
      {
        name: 'Contact Us',
        items: ['YouTube', 'Facebook', 'X', 'Instagram', 'TikTok']
      },
      {
        name: 'Account',
        items: ['Sign Up', 'Log In']
      }
    ];
  }]);