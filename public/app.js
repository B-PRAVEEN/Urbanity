<<<<<<< HEAD
'use strict';


var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.load',
    'ui.jq',
    'oc.lazyLoad',
    'pascalprecht.translate'
]);
=======
angular.module('urbanity', ['ngAnimate','ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/messaging');
    $stateProvider   
        .state('landing', {
            url: '/landing',
            templateUrl: '/landing/landingView.html',
            controller: 'landingCtrl'
        })  
            .state('home', {
            url: '/home',
            templateUrl: '/home/homeView.html',
            controller: 'homeCtrl',
            resolve: { currentUser: function(authService) {
              authService.getCurrentUser().then(function(user){
                return user;
              })

            }

            }

  })
.state('profile', {
            url: '/profile',
            templateUrl: '/profile/profileView.html'
            
  })
.state('settings', {
            url: '/settings',
            templateUrl: '/settingd/settingsView.html'
  })
  .state('search', {
            url: '/search',
            templateUrl: '/search/searchView.html'          

  }).state('favorites', {
            url: '/favorites',
            templateUrl: '/favorites/favoritesView.html'

  }).state('messaging', {
            url: '/messaging',
            templateUrl: '/message/messageView.html'
      

  }).state('tasks', {
            url: '/tasks',
            templateUrl: '/tasks/tasksView.html'

  })
  
});

>>>>>>> 149a56b6beb0a392ad38c8189a1416427fed677b
