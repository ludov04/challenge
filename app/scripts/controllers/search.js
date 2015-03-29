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
      if (query.length === 0) {
        console.log(query);
        $scope.tiles.filtered = $scope.tiles.original;
      }
      else if (! angular.isUndefined(query)) {
        $scope.tiles.filtered = search.search(query);
      }
    };
  });
