angular.module('urbanity')
.factory('authService', function(){
  var service = {};

service.getCurrentUser = function() {
  return service.user
       }



  return service;
})