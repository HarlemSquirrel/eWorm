function GenreController(genre) {
	var ctrl = this;
	ctrl.data = genre.data.genre;
}

// mitigate minification issues
GenreController.$inject = ['genre'];

angular
	.module('app')
	.controller('GenreController', GenreController);
