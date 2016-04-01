function BookController(book) {
	this.data = book.data;
}

angular
	.module('app')
	.controller('BookController', BookController);
