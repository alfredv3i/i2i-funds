angular.module('FundingApp').controller('FundingCtrl', ['FundService', '$scope', '$state', '$window', 'UserService',
    function(FundService, $scope, $state, $window, UserService) {

        $scope.submitFund = function() {
            if ($scope.fund) {
                FundService.save({
                    fund: $scope.fund,
                    user: UserService.getCurrentUser()
                });
            }
        }

        $scope.getFunds = function() {
            FundService.getFunds(UserService.getUserId())
                .then(function(response) {
                    $scope.funds = response.data;
                })
        }

    }
]);
