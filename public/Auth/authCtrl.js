var mymodal = angular.module('app');

mymodal.controller('authCtrl', ['$scope', '$http', '$location', 'authCtrl',
    function($scope, $http, $location, authCtrl) {
        $scope.authCtrl = authCtrl;

        // If user is signed in then redirect back home
        if ($scope.authCtrl.user) $location.path('/');

        $scope.signup = function() {
            $http.post('/auth/signup', $scope.credentials).success(function(response) {
                // If successful we assign the response to the global user model
                $scope.authCtrl.user = response;

                // And redirect to the index page
                $location.path('/');
            }).error(function(response) {
                $scope.error = response.message;
            });
        };

        $scope.signin = function() {
            $http.post('/auth/signin', $scope.credentials).success(function(response) {
                // If successful we assign the response to the global user model
                $scope.authCtrl.user = response;

                // And redirect to the index page
                $location.path('/');
            }).error(function(response) {
                $scope.error = response.message;
            });
        };
    }]);