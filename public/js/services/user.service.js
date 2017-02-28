angular.module('FundingApp').service('UserService', ['$rootScope', '$window', function($rootScope, $window) {

    this.getCurrentUser = function() {
      var user = $rootScope.token.split('.')[1];
      user = $window.atob(user);
      user = JSON.parse(user);
      return user;
    }

}]);
