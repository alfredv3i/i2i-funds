angular.module('FundingApp').controller('LoginCtrl', ['User', '$scope', '$state', '$window', 'UserService',
    function(User, $scope, $state, $window, UserService) {

        $scope.addUser = function() {
            if ($scope.user) {
                User.save($scope.user)
                    .then(function(response) {
                        $scope.user = {};
                        $state.go('home.login');
                        alert('Registration successful');
                    }, function(error) {
                        alert('Unable to register, Please try again \n Error ' + error.status + ': ' + error.statusText);
                    })
            }
        }

        $scope.login = function() {
            if ($scope.userLogin) {
                User.login($scope.userLogin)
                    .then(function(response) {
                        $window.localStorage.setItem('token', response.data.token);
                        if (UserService.getUserRole() == 'employee') {
                            $state.go('home.funds');
                        } else if (UserService.getUserRole() == 'admin') {
                            $state.go('home.adminpage');
                        }
                    }, function(error) {
                        alert('Unable to login, Please try again \n Error ' + error.status + ': ' + error.statusText);
                    })
            }
        }

        $scope.logout = function() {
            if ($window.localStorage.getItem('token')) {
                if (confirm('Are you sure?')) {
                    $window.localStorage.removeItem('token');
                    $state.go('home.login');
                }
            }
        }
    }
]);
