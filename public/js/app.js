angular.module('FundingApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home/login');

      $stateProvider

      .state('home', {
        url: '/home',
        abstract: 'true',
        templateUrl: 'views/partials/header.html'
      })

      .state('home.login', {
        url: '/login',
        templateUrl: 'views/partials/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      })

      .state('home.register', {
        url: '/register',
        templateUrl: 'views/partials/register.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      })

      .state('home.funds', {
        url: '/funds',
        templateUrl: 'views/partials/userfund.html',
        controller: 'FundingCtrl',
        controllerAs: 'fundCtrl'
      });

}]);
