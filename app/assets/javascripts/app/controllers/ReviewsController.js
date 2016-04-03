function ReviewsController(book) {
	this.book = book.data.book;
}

angular
	.module('app')
	.controller('ReviewsController', ReviewsController);
