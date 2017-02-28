angular.module('FundingApp').service('FundService', ['$http', function($http) {

    this.save = function(fund) {
        return $http.post('/api/funds', fund);
    }

}]);
