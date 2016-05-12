function BooksService($http) {
	var API_URL = '/books';

	this.getBooks = function () {
		return $http.get(API_URL + '.json');
	};

	this.getBook = function (id) {
		return $http.get(API_URL + '/' + id + '.json');
	};

	this.postBook = function (data) {
		return $http.post(API_URL, data);
	};
}

// mitigate minification issues
BooksService.$inject = ['$http'];

angular
	.module('app')
	.service('BooksService', BooksService);
