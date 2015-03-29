'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('CreateCtrl', function ($scope) {
    $scope.createTile = function(title, description, tags) {
      var tagsArray = [];
      if (! angular.isUndefined(tags) ) {
        tagsArray = tags.split(',').map(function (name) {
          return {
            name: name
          };
        });
      }
      
      var today = (new Date()).toISOString();
      var tile = {
        added: today,
        title: title,
        description: description,
        tags: tagsArray
      };
      $scope.tiles.original.push(tile);
    };
  });
