var API_URL = '';

function BooksService($http) {
	this.getBooks = function () {
		return $http.get(API_URL + '/books.json');
	};

	this.getBook = function (id) {
		return $http.get(API_URL + '/books/' + id + '.json');
	};
}

angular
	.module('app')
	.service('BooksService', BooksService);
