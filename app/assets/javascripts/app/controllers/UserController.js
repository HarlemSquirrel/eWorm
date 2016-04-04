function UserController($rootScope, $scope, $state, Auth, UserService) {
  var ctrl = this;

  ctrl.login = function () {
    var credentials = {email: this.email, password: this.password}
    UserService.login(credentials)
  }

  ctrl.signup = function () {
    var credentials = { username: this.username, email: this.email, password: this.password, password_confirmation: this.password_confirmation };
    UserService.signup(credentials)
    //Auth.register(credentials, config).then(function(registeredUser) {
    //  console.log(registeredUser); // => {id: 1, ect: '...'}
    //}, function(error) {
    //  console.log('error registering user');
    //});
  }

 $scope.callLogout = function () {
   UserService.logout();
 }


  $scope.$on('devise:login', function(event, currentUser) {
    $state.go('home');
  });

  $scope.$on('devise:new-session', function(event, currentUser) {
    $state.go('home');
  });

  $scope.$on('devise:new-registration', function(event, user) {
    $state.go('home');
  });

  $scope.$on('devise:logout', function(event, oldCurrentUser) {
   $state.go('home');
  });

}

angular
  .module('app')
  .controller('UserController', UserController)
