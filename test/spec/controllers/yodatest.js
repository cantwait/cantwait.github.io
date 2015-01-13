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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.yodaSays.length).toBe(25);
  });
});
