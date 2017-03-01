angular.module('FundingApp').controller('AdminCtrl', ['User', '$scope', '$state', '$window', 'FundService',
    function(User, $scope, $state, $window, FundService) {

        var vm = this;

        $scope.getFunds = function() {
            FundService.getPendingFunds()
                .then(function(response) {
                    $scope.funds = response.data;
                })
        }

        $scope.acceptFund = function(fund) {
            fund.status = 'Approved';
            FundService.updateFund(fund)
                .then(function(response) {
                    $scope.funds = response.data;
                })
        }

        $scope.rejectFund = function(fund) {
            fund.status = 'Rejected';
            FundService.updateFund(fund)
                .then(function(response) {
                    $scope.funds = response.data;
                })
        }
    }
]);
