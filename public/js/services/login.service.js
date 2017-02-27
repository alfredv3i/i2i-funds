angular.module('FundingApp').factory('User', ['$http', function($http) {

    return {

        save: function(user) {
            $http.post('api/users', user);
        }
    }

}]);
