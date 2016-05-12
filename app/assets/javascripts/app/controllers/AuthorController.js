function AuthorController(author) {
	var ctrl = this;
	ctrl.data = author.data.author;
}

// mitigate minification issues
AuthorController.$inject = ['author'];

angular
	.module('app')
	.controller('AuthorController', AuthorController);
