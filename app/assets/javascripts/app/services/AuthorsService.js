function AuthorsService($http) {
	var API_URL = '/authors';

	this.getAuthors = function () {
		return $http.get(API_URL + '.json');
	};

	this.getAuthor = function (id) {
		return $http.get(API_URL + '/' + id + '.json');
	};
}

// mitigate minification issues
AuthorsService.$inject = ['$http'];

angular
	.module('app')
	.service('AuthorsService', AuthorsService);
