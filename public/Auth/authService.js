angular.module('app')
.factory('authService', function(){
  var service = {};

service.getCurrentUser = function() {
  return service.user
       };



  return service;
});