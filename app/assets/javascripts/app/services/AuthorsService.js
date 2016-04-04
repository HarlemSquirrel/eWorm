function AuthorsService($http) {
	var API_URL = '/authors';

	this.getAuthors = function () {
		return $http.get(API_URL + '.json');
	};

	this.getAuthor = function (id) {
		return $http.get(API_URL + '/' + id + '.json');
	};
}

angular
	.module('app')
	.service('AuthorsService', AuthorsService);
