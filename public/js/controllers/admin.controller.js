angular.module('FundingApp').controller('AdminCtrl', ['User', '$scope', '$state', '$window', 'FundService',
    function(User, $scope, $state, $window, FundService) {

        var vm = this;

        $scope.getFunds = function() {
            FundService.getPendingFunds()
                .then(function(response) {
                    $scope.funds = response.data;
                    if (!$scope.funds.length) {
                        alert('There are no pending funds');
                    }
                }, function(error) {
                    alert('Unable to get funds, Please try later \n Error ' + error.status + ': ' + error.statusText);
                })
        }

        $scope.acceptFund = function(fund) {
            if (confirm('Are you sure?')) {
              fund.status = 'Approved';
              FundService.updateFund(fund)
              .then(function(response) {
                  $scope.funds = response.data;
                  alert('Fund Approved');
              }, function(error) {
                  alert('Unable to approve fund, Please try later \n Error ' + error.status + ': ' + error.statusText);
              })
            }

        }

        $scope.rejectFund = function(fund) {
            fund.status = 'Rejected';
            FundService.updateFund(fund)
                .then(function(response) {
                    $scope.funds = response.data;
                    alert('Fund Rejected');
                }, function(error) {
                    alert('Unable to reject fund, Please try later \n Error ' + error.status + ': ' + error.statusText);
                })
        }
    }
]);
