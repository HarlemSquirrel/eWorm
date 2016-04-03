function UserService(Auth, $state) {
  this.isLoggedIn = Auth.isAuthenticated();

  this.login = function (email, password) {
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    var credentials = { email: email, password: password };

    Auth.login(credentials, config).then(function(res) {
      console.log(res.user.username + ' logged in.');
    }, function(error) {
      // Authentication failed...
      console.log('An error occurred logging in!');
    });
  }

  this.logout = function () {
    var config = {
       headers: {
         'X-HTTP-Method-Override': 'DELETE'
       }
     };

    Auth.logout(config).then(function(res) {
      console.log(res.user.username + ' logged out.');
      $state.go('home', {}, {reload: true});
    }, function(error) {
     console.log('An error occurred logging out!');
    });
  };
}

angular
	.module('app')
	.service('UserService', UserService);
