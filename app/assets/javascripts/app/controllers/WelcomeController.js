function WelcomeController() {
  this.message = "hello world";
}

angular
  .module('app')
  .controller('WelcomeController', WelcomeController)
