'use strict';

whatShouldIStudyApp.factory('technologyService', function ($resource){
  var service = $resource('/technology');

  return {
    getTechnology: function (){
      return service.get();
    }
  };

});
