angular.module('FundingApp').controller('LoginCtrl',
    ['User', '$scope', '$state', '$window', 'UserService',
    function(User, $scope, $state, $window, UserService) {

    var vm = this;

    $scope.addUser = function() {
        if($scope.user) {
            User.save($scope.user)
            .then(function(response) {
            })
        }
    }

    $scope.login = function() {
        if($scope.userLogin) {
            User.login($scope.userLogin)
            .then(function(response) {
                $window.localStorage.setItem('token', response.data.token);
                UserService.getCurrentUser();
                if (response.status == 200 && UserService.getUserRole() == 'employee') {
                    $state.go('home.funds');
                } else if (response.status == 200 && UserService.getUserRole() == 'admin') {
                    $state.go('home.adminpage');
                }
            })
        }
    }
}]);
