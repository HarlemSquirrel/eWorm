function BookController(book) {
	this.data = book.data.book;
}

angular
	.module('app')
	.controller('BookController', BookController);
