angular.module('FundingApp').controller('FundingCtrl',
    ['FundService', '$scope', '$state', '$rootScope', 'UserService',
    function(FundService, $scope, $state, $rootScope, UserService) {

    $scope.submitFund = function() {
        if($scope.fund) {
            console.log($scope.fund, $rootScope.token);
            FundService.save({
                fund: $scope.fund,
                token: $rootScope.token,
                user: UserService.getCurrentUser()
            });
        }
    }

}]);
