angular.module('FundingApp').controller('LoginCtrl',
    ['User', '$scope', '$state', '$rootScope', 'UserService',
    function(User, $scope, $state, $rootScope, UserService) {

    var vm = this;
    vm.user = {};
    vm.test = '';
    $rootScope.token = '';

    $scope.addUser = function() {
        console.log($scope.user);
        if($scope.user) {
            User.save($scope.user)
            .then(function(res) {
                console.log(res);
            })
        }
    }

    $scope.login = function() {
        if($scope.userLogin) {
            User.login($scope.userLogin)
            .then(function(res) {
                console.log(res.status);
                console.log(res.data.token);
                $rootScope.token = res.data.token;
                UserService.getCurrentUser();
                if (res.status == 200) {
                    $state.go('home.funds');
                }
            })
        }
    }
}]);
