function NewBookController($state, authors, genres, BooksService) {
	var ctrl = this;
	ctrl.authors = authors.data.authors;
  ctrl.genres = genres.data.genres;

	ctrl.create = function () {
    var data = { book: { title: ctrl.title, author: ctrl.author, genre: ctrl.genre, year_published: ctrl.year_published } };

    BooksService.postBook(data);
    $state.go("books", {reload: true});
  }
}

// mitigate minification issues
NewBookController.$inject = ['$state', 'authors', 'genres', 'BooksService'];

angular
	.module('app')
	.controller('NewBookController', NewBookController);
