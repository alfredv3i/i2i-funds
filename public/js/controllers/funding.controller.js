angular.module('FundingApp').controller('FundingCtrl', ['FundService', '$scope', '$state', '$window', 'UserService',
    function(FundService, $scope, $state, $window, UserService) {

        $scope.submitFund = function() {
            if ($scope.fund) {
                FundService.save({
                    fund: $scope.fund,
                    user: UserService.getCurrentUser()
                }).then(function(response) {
                    $scope.fund = {};
                    alert('Fund submitted successfully');
                }, function(error) {
                    alert('Unable to add funds \n Error ' + error.status + ': ' + error.statusText);
                });
            }
        }

        $scope.getFunds = function() {
            if (UserService.getCurrentUser()) {
                FundService.getFunds(UserService.getCurrentUser()._id)
                    .then(function(response) {
                        $scope.funds = response.data;
                        if (!$scope.funds.length) {
                            alert('Your fund list is empty');
                        }
                    }, function(error) {
                        console.log(error);
                        alert('Unable to get funds \n Error ' + error.status + ': ' + error.statusText);
                    })
            }
        }
    }
]);
