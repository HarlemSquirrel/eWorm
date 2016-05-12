function WelcomeController($scope, UserService) {
  $scope.callIsLoggedIn = function () {
    debugger;
    return UserService.isLoggedIn();
  }
}

// mitigate minification issues
WelcomeController.$inject = ['$scope', 'UserService'];

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
