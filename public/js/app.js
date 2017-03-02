angular.module('FundingApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home/login');

      $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'views/partials/header.html',
        controller: 'LoginCtrl'
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
        templateUrl: 'views/partials/fundform.html',
        controller: 'FundingCtrl',
        controllerAs: 'fundCtrl'
      })

      .state('home.fundpage', {
        url: '/fundpage',
        templateUrl: 'views/partials/fundlist.html',
        controller: 'FundingCtrl',
        controllerAs: 'fundCtrl'
      })

      .state('home.adminpage', {
        url: '/adminpage',
        templateUrl: 'views/partials/adminpage.html',
        controller: 'AdminCtrl',
        controllerAs: 'adminCtrl'
      });

}]);
