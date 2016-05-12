var BOOKS_PER_PAGE = 12;

function BooksController(books, $filter, $scope) {
	var ctrl = this;

	ctrl.page = 0;
	ctrl.totalBooks = books.data.books.length;
	ctrl.totalPages = Math.ceil(ctrl.totalBooks / BOOKS_PER_PAGE);

	$scope.$watch('books_ctrl.search', function (val) {
		ctrl.filteredBooks = $filter('filter')(books.data.books, val);
		ctrl.paginateBooks()
	});



	ctrl.paginateBooks = function () {
		ctrl.paginatedBooks = ctrl.filteredBooks.slice(ctrl.page * BOOKS_PER_PAGE, (ctrl.page + 1) * BOOKS_PER_PAGE);
	};

	ctrl.nextPage = function () {
		ctrl.page++;
		ctrl.paginateBooks()
	};

	ctrl.previousPage = function () {
		ctrl.page--;
		ctrl.paginateBooks();
	};
}

// mitigate minification issues
BooksController.$inject = ['books', '$filter', '$scope'];

angular
  .module('app')
  .controller('BooksController', BooksController)
