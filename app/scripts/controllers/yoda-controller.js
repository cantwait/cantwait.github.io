'use strict';

/**
 * @ngdoc function
 * @name admiosTestProjectApp.controller:MainCtrl
 * @description
 * # YodaCtrl
 * Controller of the admiosTestProjectApp
 */
angular.module('admiosTestProjectApp')
  .controller('YodaCtrl',['$scope','appFactory',function ($scope, appFactory) {
    $scope.yodaSays = 'Me Yoda, Help you, I Will';
    $scope.yodaMessage = '';
    $scope.showMessage = function(messageArg){
    	appFactory
    		.getMessage(messageArg)
    			.success( function(data) {
    				$scope.yodaMessage = data;
    			});
    };
  }]);
