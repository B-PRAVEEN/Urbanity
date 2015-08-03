angular.module('urbanity', ['ngAnimate','ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/landing');
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
            templateUrl: '/messaging/messagingView.html'
      

  }).state('tasks', {
            url: '/tasks',
            templateUrl: '/tasks/tasksView.html'

  })
  
});

