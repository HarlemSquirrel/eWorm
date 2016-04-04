function AuthorController(author, $rootScope) {
	var ctrl = this;
	ctrl.data = author.data.author;
}

angular
	.module('app')
	.controller('AuthorController', AuthorController);
