function GenresService($http) {
	var API_URL = '/genres';

	this.getGenres = function () {
		return $http.get(API_URL + '.json');
	};

	this.getGenre = function (id) {
		return $http.get(API_URL + '/' + id + '.json');
	};
}

// mitigate minification issues
GenresService.$inject = ['$http'];

angular
	.module('app')
	.service('GenresService', GenresService);
