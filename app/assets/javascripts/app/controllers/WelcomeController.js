function WelcomeController($scope, UserService) {
  $scope.callIsLoggedIn = function () {
    debugger;
    return UserService.isLoggedIn();
  }
  this.message = "hello world";
}

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
