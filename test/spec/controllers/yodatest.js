'use strict';

describe('Controller: YodaCtrl', function () {

  // load the controller's module
  beforeEach(module('admiosTestProjectApp'));

  var YodaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YodaCtrl = $controller('YodaCtrl', {
      $scope: scope
    });
  }));

  it('should initialize yodaSays scope var', function () {
    expect(scope.yodaSays.length).toBe(25);
  });

  it('should be empty yodaMessage scope var', function () {
    expect(scope.yodaMessage.length).toBe(0);
  });
});
