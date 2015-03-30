'use strict';

describe('Directive: tile', function () {

  // load the directive's module
  beforeEach(module('challengeApp'));
  beforeEach(module('templates'));
  var element,
    scope;


  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.tile = {
      title: 'Tile Title',
      description: 'Tile description'
    };
    element = angular.element('<tile></tile>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should contain the tile title and description', inject(function () {
    expect(element.find('h5').text()).toBe('Tile Title');
    expect(element.find('.description').text()).toBe('Tile description');
  }));

  it('should has the class tile', inject(function () {
    expect(element.children().hasClass('tile')).toBeTruthy();
  }));

  it('should has the controller TileCtrl', inject(function () {
    expect(element.children().attr('ng-controller')).toBe('TileCtrl');
  }));
});