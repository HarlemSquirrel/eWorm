function AuthorController(author) {
	var ctrl = this;
	ctrl.data = author.data.author;
}

// mitigate minification issues
AuthorsController.$inject = ['author'];

angular
	.module('app')
	.controller('AuthorController', AuthorController);
