var BOOKS_PER_PAGE = 10;

function BooksController(books) {
	var ctrl = this;

	ctrl.page = 0;
	ctrl.totalBooks = books.data.books.length;
	ctrl.totalPages = Math.ceil(ctrl.totalBooks / BOOKS_PER_PAGE);

	ctrl.paginateBooks = function () {
		ctrl.books = books.data.books.slice(ctrl.page * BOOKS_PER_PAGE, (ctrl.page + 1) * BOOKS_PER_PAGE);
	};

	ctrl.nextPage = function () {
		ctrl.page++;
		ctrl.paginateBooks()
	};

	ctrl.previousPage = function () {
		ctrl.page--;
		ctrl.paginateBooks();
	};

	ctrl.paginateBooks();
}

angular
  .module('app')
  .controller('BooksController', BooksController)
