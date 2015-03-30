'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:TileCtrl
 * @description
 * # TileCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('TileCtrl', function ($scope) {

  	$scope.removeTag = function(tag) {
  		var i = $scope.tile.tags.indexOf(tag);
  		if (i > -1) {
  			$scope.tile.tags.splice(i, 1);
  		}
  	};
    
  });
