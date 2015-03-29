'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('SearchCtrl', function ($scope, search) {
    $scope.queryChanged = function(query) {
      if (! angular.isUndefined(query)) {
        if (query.length === 0) {
          $scope.tiles.filtered = $scope.tiles.original;
        }
        else {
          $scope.tiles.filtered = search.search(query);
        }
      }
    };
  });
