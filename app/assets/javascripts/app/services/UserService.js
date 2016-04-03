//var API_URL = '';

function UserService(Auth) {
  this.isLoggedIn = Auth.isAuthenticated();

  this.login = function (email, password) {
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };
    var credentials = { email: email, password: password };
    //debugger;
    Auth.login(credentials, config).then(function(user) {

      console.log(user + 'logged in!');
    }, function(error) {
      // Authentication failed...
      //debugger;
    });
  }

  this.logout = function () {
    //debugger;
    var config = {
       headers: {
         'X-HTTP-Method-Override': 'DELETE'
       }
     };
    Auth.logout(config).then(function(oldUser) {
      console.log(user + 'logged out!');
     alert("You are logged out!");
    }, function(error) {
     // An error occurred logging out.
    });
  };
}

angular
	.module('app')
	.service('UserService', UserService);
