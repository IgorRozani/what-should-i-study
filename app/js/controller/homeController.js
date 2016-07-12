'use strict';

whatShouldIStudyApp.controller('HomeController', function HomeController($scope, technologyService){
  $scope.technology = technologyService.getTechnology();
});
