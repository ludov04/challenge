'use strict';

describe('Controller: CreateCtrl', function () {

  // load the controller's module
  beforeEach(module('challengeApp'));

  var CreateCtrl,
    scope;
  var tile = {
    title: 'test', 
    description: 'desc', 
    tags : [
      {
        name:'tag1'
      }, {
        name: 'tag2'
      }
    ]
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.tiles = {
      original: []
    };
    CreateCtrl = $controller('CreateCtrl', {
      $scope: scope
    });

  }));

  it('should create a tile when calling createTile', function () {
    scope.createTile(tile.title, tile.description, 'tag1, tags2');
    expect(scope.tiles.original.length > 0).toBe(true);
  });
});
