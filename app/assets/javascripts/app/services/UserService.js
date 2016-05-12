function UserService(Auth, $state) {
  this.isLoggedIn = function () {
    return Auth.isAuthenticated();
  }

  this.signup = function (credentials) {
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    Auth.register(credentials, config).then(function(registeredUser) {
      console.log(registeredUser); // => {id: 1, ect: '...'}
    }, function(error) {
      console.log('error registering user');
    });
  }

  this.login = function (credentials) {
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

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

// mitigate minification issues
UserService.$inject = ['Auth', '$state'];

angular
	.module('app')
	.service('UserService', UserService);
