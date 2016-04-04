function GenreController(genre, $rootScope) {
	var ctrl = this;
	ctrl.data = genre.data.genre;
}

angular
	.module('app')
	.controller('GenreController', GenreController);
