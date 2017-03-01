angular.module('FundingApp').service('UserService', ['$window', function($window) {

    this.getCurrentUser = function() {
      var user = $window.localStorage.getItem('token').split('.')[1];
      user = $window.atob(user);
      user = JSON.parse(user);
      return user;
    }

    this.getUserId = function() {
      var user = $window.localStorage.getItem('token').split('.')[1];
      user = $window.atob(user);
      user = JSON.parse(user);
      return user._id;
    }

    this.getUserRole = function() {
      var user = $window.localStorage.getItem('token').split('.')[1];
      user = $window.atob(user);
      user = JSON.parse(user);
      return user.role;
    }

}]);
