'use strict';
angular.module('admiosTestProjectApp')
.factory('appFactory', ['$http', function($http){
	var urlBase = 'https://yoda.p.mashape.com/yoda';
	var dataFactory = {};

	dataFactory.getMessage = function(msg){
		return $http.get(urlBase + '?sentence=' + msg,
		{ headers: {'X-Mashape-Key': 'AfvnRniXW2mshsSgsoFrT4ccYNwpp1YK0a7jsnU9K7XqyRGGVO'}});
	};

	return dataFactory;
}]);