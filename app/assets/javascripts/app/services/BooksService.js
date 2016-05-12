function BooksService($http) {
	var API_URL = '';

	this.getBooks = function () {
		return $http.get(API_URL + '/books.json');
	};

	this.getBook = function (id) {
		return $http.get(API_URL + '/books/' + id + '.json');
	};
}

// mitigate minification issues
BooksService.$inject = ['$http'];

angular
	.module('app')
	.service('BooksService', BooksService);
