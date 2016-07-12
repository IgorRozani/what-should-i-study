'use strict';

var whatShouldIStudyApp = angular.module('whatShouldIStudyApp',['ngRoute', 'ngResource'])
  .config(function($routeProvider){
    $routeProvider.when('/home', {
      templateUrl:'template/HomeController.html',
      controller: 'HomeController'
    });
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
});
