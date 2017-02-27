angular.module('FundingApp').controller('LoginCtrl', ['User', '$scope', function(User, $scope) {

    var vm = this;
    vm.user = {};
    vm.test = '';

    console.log(vm);

    $scope.addUser = function() {
        console.log($scope.user);
        if($scope.user) {
            User.save($scope.user);
            // $scope.user = {};
        }
    }

    console.log(vm);

}]);
