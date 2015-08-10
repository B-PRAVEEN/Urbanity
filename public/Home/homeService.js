angular.module('app')
    .factory('mainService', function($http, $q){
        var service = {};




        service.getMainProfile = function() {
            console.log("Get request made to the server");
            var dfd = $q.defer();
            $http.get('/demo-endpoint/')
                .success(function(response) {
                    console.log("Results of the service GET: ", response);
                    dfd.resolve(response);
                    service.results = response;
                })
                .error(function(error) {
                    console.log(error);
                });
            return dfd.promise;
        };






        return service;

    });