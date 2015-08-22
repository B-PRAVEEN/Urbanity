'use strict';


var Signup = angular.module('app');

// signup controller
Signup.controller('authCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function () {
        $scope.authError = null;
        // Try to create
        $http.post('/signup', {email: $scope.user.email, password: $scope.user.password})
            .success(function (response) {
                if (!response.local.email) {
                    $scope.authError = response;
                } else {
                    $state.go('app.page.profile');
                }
            })
    }
}]);