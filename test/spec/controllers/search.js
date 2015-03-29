'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('challengeApp'));

  var SearchCtrl,
    scope;

  var data = ['test1', 'test2', 'test3'];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
    scope.tiles = {
      filtered : data,
      original : data
    };
  }));

  it('should assign tiles.filtered to original data when query string is empty', function () {
    scope.queryChanged("c");
    scope.queryChanged("");
    expect(scope.tiles.filtered).toBe(scope.tiles.original);
  });
});
