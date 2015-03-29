'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('MainCtrl', function ($scope, $http, search) {

    /**
    * Possible enhancement: limit number of tiles + infinite scroll
    */
    $http.get('/data/tiles.json').success( function(data) {
    // this callback will be called asynchronously
    // when the response is available
      $scope.tiles = { filtered: data, original: data };
      search.init(data);
    }).
    error(function(data, status) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      console.log(status);
      alert('Could not load tiles');
    });



  });
