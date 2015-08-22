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
                .otherwise('/welcome');
            $stateProvider.
                state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'index.html'
                }).
                state('app.welcome', {
                    url: '^/welcome',
                    templateUrl: '../landing/landingView.html',
                    controller: 'authCtrl'
                }).
                state('app.page', {
                    url: '^/home',
                    templateUrl: 'appCtrl'
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
                }).
                //access
                state('access', {
                    url: '/access',
                    template: '<div ui-view class="fade-in-right-big smooth"></div>'
                }).
                state('access.signin', {
                    url: '^/signin',
                    templateUrl: '../auth/signinView.html',
                    resolve: {
                        deps: ['uiLoad',
                            function( uiLoad ){
                                return uiLoad.load( ['auth/authCtrl.js'] );
                            }]
                    }
                }).
                state('access.signup', {
                    url: '^/signup',
                    templateUrl: '../auth/signup.html',
                    resolve: {
                        deps: ['uiLoad',
                            function( uiLoad ){
                                return uiLoad.load( ['auth/authCtrl.js'] );
                            }]
                    }
                }).
                state('access.404', {
                    url: '^/404',
                    templateUrl: '../auth/page_404.html'
                }).
                state('access.forgotpwd', {
                    url: '^/forgotpwd',
                    templateUrl: '../auth/page_forgotpwd.html'
                }).
                state('access.reset', {
                    url: '^reset/:token',
                    templateUrl: 'views/password/resetPasswordView.html'
                }).
                state('access.reset-invalid', {
                    url: '^/resetfail',
                    templateUrl: '../auth/resetInvalidView.html'
                }).
                state('access.reset-success', {
                    url: '^/resetsuccess',
                    templateUrl: 'views/password/resetSuccessView.html'
                })
                // fullCalendar
                .state('app.calendar', {
                    url: '^/calendar',
                    templateUrl: 'views/app_calendar.html',
                    resolve: {
                        deps: ['$ocLazyLoad', 'uiLoad',
                            function( $ocLazyLoad, uiLoad ){
                                return uiLoad.load(
                                    JQ_CONFIG.fullcalendar.concat('assets/js/calendar.js')
                                ).then(
                                    function(){
                                        return $ocLazyLoad.load('ui.calendar');
                                    }
                                )
                            }]
                    }
                })
                // mail
                .state('app.mail', {
                    abstract: true,
                    url: '^/mail',
                    templateUrl: 'views/mail.html',
                    resolve: {
                        deps: ['uiLoad',
                            function( uiLoad ){
                                return uiLoad.load( ['assets/js/mail.js',
                                    'assets/js/mail-service.js',
                                    JQ_CONFIG.moment] );
                            }]
                    }
                })
                .state('app.mail.list', {
                    url: '/inbox/{fold}',
                    templateUrl: 'views/mail.list.html'
                })
                .state('app.mail.detail', {
                    url: '/{mailId:[0-9]{1,4}}',
                    templateUrl: 'views/mail.detail.html'
                })
                .state('app.mail.compose', {
                    url: '/compose',
                    templateUrl: 'views/mail.new.html'
                })

        }
    ]
);