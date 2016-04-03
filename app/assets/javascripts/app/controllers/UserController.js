function UserController($scope, $state, Auth, UserService) {
  var ctrl = this;

  //Auth.currentUser().then(function(user) {
    // User was logged in, or Devise returned
    // previously authenticated session.
  //  console.log(user); // => {id: 1, ect: '...'}
  //}, function(error) {
    // unauthenticated error
  //});

  //var credentials = {
  //  email: 'test@test.net',
  //  password: 'testwecan'
  //};


  ctrl.login = function () {
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };
    var credentials = { email: this.email, password: this.password };
    //debugger;
    Auth.login(credentials, config).then(function(user) {
      //debugger;
      //console.log(user); // => {id: 1, ect: '...'}
    }, function(error) {
      // Authentication failed...
      //debugger;
    });
  }

  ctrl.signup = function () {
    var credentials = { username: this.username, email: this.email, password: this.password, password_confirmation: this.password_confirmation };
    //debugger;
    Auth.register(credentials, config).then(function(registeredUser) {
      console.log(registeredUser); // => {id: 1, ect: '...'}
    }, function(error) {
      // Registration failed...
    });
  }

  //debugger;
 $scope.callLogout = function () {
   //debugger;
   UserService.logout();
 }


  $scope.$on('devise:login', function(event, currentUser) {
    // after a login, a hard refresh, a new tab
    $state.go('home');
  });

  $scope.$on('devise:new-session', function(event, currentUser) {
    // user logged in by Auth.login({...})
  });

  $scope.$on('devise:new-registration', function(event, user) {
      // soemthing
  });

  $scope.$on('devise:logout', function(event, oldCurrentUser) {
   // ...
   $state.go('home');
  });

}

angular
  .module('app')
  .controller('UserController', UserController)
