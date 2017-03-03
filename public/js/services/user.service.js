angular.module('FundingApp').service('UserService', ['$window', function($window) {

    this.getCurrentUser = function() {
        if ($window.localStorage.getItem('token')) {
            var user = $window.localStorage.getItem('token').split('.')[1];
            user = $window.atob(user);
            user = JSON.parse(user);
            return user;
        }
    }

    this.setToken = function(token) {
        $window.localStorage.setItem('token', token);
        $window.localStorage.setItem('loggedIn', true);
        var user = token.split('.')[1];
        user = $window.atob(user);
        user = JSON.parse(user);
        $window.localStorage.setItem('userName', user.first_name);
        if (user.role == 'admin') {
            $window.localStorage.setItem('isAdmin', true);
        } else {
            $window.localStorage.setItem('isAdmin', false);
        }
    }

}]);
