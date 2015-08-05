'use strict';

// Setting up route
angular.module('app')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
        function($stateProvider, $urlRouterProvider, JQ_CONFIG) {
            $urlRouterProvider
                .otherwise('/');
            $stateProvider.
                state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'app.html'
                }).
                state('app.page', {
                    url: '/page',
                    template: '<div ui-view class="fade-in-down"></div>'

                }).
                state('app.page.profile', {
                    url: '/profile',
                    templateUrl: 'userProfile/profileView.html'
                }).
                state('nav.profilePost', {
                    url: '/post',
                    templateUrl: 'views/makePostView.html'
                }).
                state('nav.profileListing', {
                    url: '/search',
                    templateUrl: 'views/profileListingView.html'
                }).
                state('nav.profileSettings', {
                    url: '/profileSettings',
                    templateUrl: 'views/settings/editProfileView.html'
                }).
                state('nav.accountSettings', {
                    url: '/accountsettings',
                    templateUrl: 'views/settings/editAccountView.html'
                }).
                state('password', {
                    url: '/settings/password',
                    templateUrl: 'views/settings/changePasswordView.html'
                }).
                state('signup', {
                    url: '/signupView',
                    templateUrl: 'views/authentication/signupView.html',
                    controller: 'authentication/authCtrl.js'
                }).
                state('signin', {
                    url: '/signinView',
                    templateUrl: 'views/authentication/signinView.html',
                    controller: 'authentication/authCtrl.js'
                }).
                state('forgot', {
                    url: 'password/forgot',
                    templateUrl: 'views/password/forgotPasswordView.html'
                }).
                state('reset-invalid', {
                    url: 'password/reset/invalid',
                    templateUrl: 'views/password/resetInvalidView.html'
                }).
                state('reset-success', {
                    url: 'password/reset/success',
                    templateUrl: 'views/password/resetSuccessView.html'
                }).
                state('reset', {
                    url: 'password/reset/:token',
                    templateUrl: 'views/password/resetPasswordView.html'
                })
        }
    ]
);
