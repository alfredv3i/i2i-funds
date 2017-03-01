angular.module('FundingApp').service('FundService', ['$http', '$window', function($http, $window) {

    var config = { headers: { Authorization: 'Bearer ' + $window.localStorage.getItem('token') } }

    this.save = function(fund) {
        return $http.post('/api/funds', fund, config);
    }

    this.getFunds = function(id) {
        return $http.get('/api/funds/' + id, config);
    }

    this.getPendingFunds = function() {
        return $http.get('/api/funds', config);
    }

    this.updateFund = function(fund) {
        return $http.put('/api/funds', fund, config);
    }
}]);
