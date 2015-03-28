'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/data/tiles.json').success( function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
        $scope.tiles = data;
    }).
    error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
  });
