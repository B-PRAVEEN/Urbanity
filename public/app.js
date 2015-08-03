angular.module('urbanity', ['ngAnimate','ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main.state1', {
        url: '^/feed',
        templateUrl: 'partials/state1.html'
      })
      .state('main.state2', {
        url: '^/profile',
        templateUrl: 'partials/state2.html'
      })
      .state('main', {
        url: '^/',
        abstract: true,
        templateUrl: 'main/mainView.html',
        controller: 'mainCtrl'
      })
      .state('main.home', {
        url: '',
        template: '<h1> This is the feed view </h1>'
      })

  });
