'use strict';

describe('Controller: TileCtrl', function () {

  // load the controller's module
  beforeEach(module('challengeApp'));

  var TileCtrl,
    scope;



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    
    TileCtrl = $controller('TileCtrl', {
      $scope: scope
    });
    scope.tile = {
      tags: [
        {id: 1}, 
        {id: 2}, 
        {id: 3}
      ]
    };
  }));

  it('should remove a tag when calling removeTag', function () {
    scope.removeTag(scope.tile.tags[0]);

    expect(scope.tile.tags.length).toBe(2);
    expect(scope.tile.tags[0].id).toBe(2);
  });
});
