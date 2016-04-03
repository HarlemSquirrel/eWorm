//var API_URL = '';

function UserService(Auth) {
  this.isLoggedIn = Auth.isAuthenticated()
  this.logout = function () {
    //debugger;
    var config = {
       headers: {
         'X-HTTP-Method-Override': 'DELETE'
       }
     };
    Auth.logout(config).then(function(oldUser) {
      //debugger;
     //alert(oldUser.username + "you're signed out now.");
     alert("You are logged out!");
    }, function(error) {
     // An error occurred logging out.
    });
  };
}

angular
	.module('app')
	.service('UserService', UserService);
