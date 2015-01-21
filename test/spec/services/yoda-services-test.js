'use strict';

describe('YodaFactory Service tests', function(){
  var appFactory,
      httpBackend;


  beforeEach(function(){
    module('admiosTestProjectApp');

    inject(function($httpBackend, _appFactory_){
      appFactory = _appFactory_;
      httpBackend = $httpBackend;
    });
  });
  
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  //check if the function exists
  it('should have an getMessage function', function(){
    expect(angular.isFunction(appFactory.getMessage)).toBe(true);
  });

  //test http service call
  it('should send the argument message and return a response', function(){
    //mock response
    var expectedResponse = 'yoda says';

    httpBackend.expectGET('https://yoda.p.mashape.com/yoda?sentence=yoda says').respond(expectedResponse);

    var returnedPromise = appFactory.getMessage('yoda says');
    var result;
    var s;

    returnedPromise.success(function(data, status){
        result = data;
        s = status;
    });

    httpBackend.flush();

    expect(result).toEqual(expectedResponse);
    expect(s).toEqual(200);
  });



});