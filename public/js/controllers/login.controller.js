angular.module('FundingApp').controller('LoginCtrl', ['User', '$scope', '$state', '$window', 'UserService', '$rootScope',
    function(User, $scope, $state, $window, UserService, $rootScope) {

        $scope.addUser = function() {
            if ($scope.user) {
                User.save($scope.user)
                    .then(function(response) {
                        $scope.user = {};
                        $state.go('home.login');
                        alert('Registration successful');
                    }, function(error) {
                        alert('Unable to register, Please try again \n Error '
                        + error.status + ': ' + error.statusText);
                    })
            }
        }

        $scope.login = function() {
            if ($scope.userLogin) {
                User.login($scope.userLogin)
                    .then(function(response) {
                        UserService.setToken(response.data.token);
                        if ($window.localStorage.getItem('isAdmin')) {
                            $state.go('home.adminpage');
                        } else {
                            $state.go('home.funds');
                        }
                    }, function(error) {
                        alert('Unable to login, Please try again \n Error '
                        + error.status + ': ' + error.statusText);
                    })
            }
        }

        $scope.logout = function() {
            if ($window.localStorage.getItem('token')) {
                if (confirm('Are you sure?')) {
                    $window.localStorage.clear();
                    $state.go('home.welcome');
                }
            }
        }
    }
]);
