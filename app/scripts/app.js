'use strict';

/**
 * @ngdoc overview
 * @name admiosTestProjectApp
 * @description
 * # admiosTestProjectApp
 *
 * Main module of the application.
 */
angular
  .module('admiosTestProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/yoda-view.html',
        controller: 'YodaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
