var auth = angular.module('app');

auth.controller('authCtrl', ['$scope', '$http', '$state', '$location',
    function($scope, $http, $state, $location) {
        $scope.showModal = false;
        $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
        };

        $scope.user = {};
            $scope.signup = function() {
                $scope.authError = null;
                console.log('signup');
                // Try to create
                $http.post('/signup', {email: $scope.user.email, password: $scope.user.password})
                    .success(function(response) {
                        console.log(response)
                    $state.go('app.page.profile');
                })
                // $http.post('/signup', {email: $scope.user.email, password: $scope.user.password})
                //     .then(function(response) {
                //         if ( !response.data.user ) {
                //             $scope.authError = response;
                //         }else{
                //             $state.go('app.page.profile');
                //         }
                //     }, function(x) {
                //         $scope.authError = 'Server Error';
                //     });
            };


//         var Signup = angular.module('app');

// // signup controller
//         Signup.controller('signupCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
//             $scope.user = {};
//             $scope.authError = null;
//             var vm = this;
//             vm.signup = function() {
//                 $scope.authError = null;
//                 console.log('signup');
//                 // Try to create
//                 $http.post('/signup', {name: $scope.user.username, email: $scope.user.email, password: $scope.user.password})
//                     .then(function(response) {
//                         if ( !response.data.user ) {
//                             $scope.authError = response;
//                         }else{
//                             $state.go('app.page.profile');
//                         }
//                     }, function(x) {
//                         $scope.authError = 'Server Error';
//                     });
//             };
//         }])
//         ;


        //$scope.authCtrl = Authentication;
        //
        //// If user is signed in then redirect back home
        //if ($scope.authCtrl.user) $location.path('/');
        //
        //$scope.signup = function() {
        //    $http.post('/auth/signup', $scope.credentials).success(function(response) {
        //        // If successful we assign the response to the global user model
        //        $scope.authCtrl.user = response;
        //
        //        // And redirect to the index page
        //        $location.path('/');
        //    }).error(function(response) {
        //        $scope.error = response.message;
        //    });
        //};
        //
        //$scope.signin = function() {
        //    $http.post('/auth/signin', $scope.credentials).success(function(response) {
        //        // If successful we assign the response to the global user model
        //        $scope.authCtrl.user = response;
        //
        //        // And redirect to the index page
        //        $location.path('/');
        //    }).error(function(response) {
        //        $scope.error = response.message;
        //    });
        //};
    }]);
