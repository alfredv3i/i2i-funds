angular.module('FundingApp').service('User', ['$http', function($http) {


    this.save = function(user) {
        return $http.post('/api/users', user);
    }

    this.login = function(userLogin) {
        return $http.post('/api/login', userLogin);
    }

}]);
