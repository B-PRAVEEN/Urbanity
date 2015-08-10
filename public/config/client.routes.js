'use strict';

// Setting up route
angular.module('app')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/welcome');
            $stateProvider.
                state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'index.html',
                    controller: 'landingCtrl'
                }).
                state('welcome', {
                    url: '^/welcome',
                    templateUrl: 'landing/landingView.html',
                    controller: 'authCtrl'
                }).
                state('access', {
                    url: '/access',
                    template: '<div ui-view class="fade-in-right-big smooth"></div>'
                }).
                state('access.signin', {
                    url: '^/signin',
                    templateUrl: 'auth/signinView.html',
                    resolve: {
                        deps: ['uiLoad',
                            function( uiLoad ){
                                return uiLoad.load( ['auth/authCtrl.js'] ); // NOT SURE IF I SHOULD TYPE CONTROLLER NAME OR THE PATH
                            }]
                    }
                }).
                state('access.signup', {
                    url: '^/signup',
                    templateUrl: 'auth/signupView.html',
                    resolve: {
                        deps: ['uiLoad',
                            function( uiLoad ){
                                return uiLoad.load( ['auth/authCtrl.js'] ); // NOT SURE IF I SHOULD TYPE CONTROLLER NAME OR THE PATH
                            }]
                    }
                }).
                state('access.404', {
                    url: '^/404',
                    templateUrl: 'auth/page_404.html'
                }).
                state('access.forgotpwd', {
                    url: '^/forgotpwd',
                    templateUrl: 'auth/page_forgotpwd.html'
                }).
                state('access.reset', {
                    url: '^reset/:token',
                    templateUrl: 'views/password/resetPasswordView.html'
                }).
                state('access.reset-invalid', {
                    url: '^/resetfail',
                    templateUrl: 'auth/resetInvalidView.html'
                }).
                state('access.reset-success', {
                    url: '^/resetsuccess',
                    templateUrl: 'views/password/resetSuccessView.html'
                }).
                state('app.page', {
                    url: '^/home',
                    template: '<div ui-view class="fade-in-down"></div>'
                }).
                state('app.page.profile', {
                    url: '^/profile',
                    templateUrl: 'userProfile/profileView.html'
                }).
                state('app.profilePost', {
                    url: '/post',
                    templateUrl: 'views/makePostView.html'
                }).
                state('app.profileListing', {
                    url: '^/profilelist',
                    templateUrl: 'views/profileListingView.html'
                }).
                state('app.profileSettings', {
                    url: '^/profsettings',
                    templateUrl: 'views/settings/editProfileView.html'
                }).
                state('app.accountSettings', {
                    url: '^/accsettings',
                    templateUrl: 'views/settings/editAccountView.html'
                })

        }
    ]
);
