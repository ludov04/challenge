'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('challengeApp'));

  var $httpBackend, tileRequestHandler, createController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    tileRequestHandler = $httpBackend.when('GET', '/data/tiles.json')
                            .respond({ tiles: 'retrived' });
    createController = function() {
      return $controller('MainCtrl', {
        $scope: scope
      });
    };
  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the tiles', function () {
    $httpBackend.expectGET('/data/tiles.json');
    createController();
    $httpBackend.flush();
  });

  it('should attach the tiles to the scope', function () {
    createController();
    $httpBackend.flush();
    expect(scope.tiles.original.tiles).toBe('retrived');
  });

  it('should display an alert if the tiles were not retrieved', function() {
    tileRequestHandler.respond(404, '');
    createController();
    spyOn(window, 'alert');
    $httpBackend.flush();
    expect(window.alert).toHaveBeenCalled();
  });
});
